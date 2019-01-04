const { exec } = require('child_process');
var compiler = new (require('markto')),
  fs = require('fs');

compiler.renderFile('./labtemplate.xml',{log:console.log}).then((res)=>{
  compiler.renderFile('./document.xml',{}).then((res)=>{
    fs.writeFileSync('./document_output.tex', res);
    runLatex('document_output.tex','document_output.pdf', 'document.pdf');
  },console.error);
}, console.error);

function runLatex(filename,output, clone){
    exec('pdflatex ' + filename, (err, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
}
