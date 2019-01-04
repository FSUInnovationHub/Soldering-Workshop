const { exec } = require('child_process');
var compiler = new (require('markto')),
  fs = require('fs');
var csv = require('csv');


// setupTables((err, tables)=>{
  compiler.renderFile('./labtemplate.xml',{log:console.log}).then((res)=>{
    compiler.renderFile('./document.xml',{}).then((res)=>{
      fs.writeFileSync('./document_output.tex', res);
      runLatex('document_output.tex','document_output.pdf', 'document.pdf');
    },console.error);
  }, console.error);
// });

function setupTables(cb){
  csv.parse(fs.readFileSync('./tables/tables.csv', 'UTF8'),(err, data)=>{
    if(!err){
      var first = [], tables = {};
      var last = data.reduce((a, row)=>{
        if(row[0].length > 0){
          if(a.length === 0) return [row];
          else {
            first = [...first, a];
            return [row];
          }
        } else if(row[2].length > 0) {
          return [...a, row];
        } else {
          return a;
        }
      }, []);
      [...first, last].forEach((element)=>{
        var key = element[0][0];
        var description = element[0][1];
        var deflate = (arr)=>arr.filter((e)=>e.length>0);

        var width = element.reduce((acuum, row)=>(deflate(row).length>acuum?deflate(row).length:acuum),0);
        var rows = '\\hline \n' + element.map((row)=>row.slice(2,width).join('&')).join('\\\\ \\hline \n') + '\\\\ \\hline \n';
        var rows_noline = element.map((row)=>row.slice(2,width).join('&')).join('\\\\ \n') + '\\\\ \n';
        var rows_raw = element.map((row)=>row.slice(2, width));

        var legend = '|' + [...Array(element[0].length-2)].map(()=>'c').join('|') + '|';
        tables[key] = {
          description:description,
          rows:rows,
          rows_noline:rows_noline,
          legend:legend,
          rows_raw:rows_raw
        };
      });
      cb(null, tables);
    } else cb(err);
  });
}
function runLatex(filename,output, clone){
    exec('pdflatex ' + filename, (err, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
}
