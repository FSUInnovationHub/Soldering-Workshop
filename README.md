# Soldering Workshop
These are the files that were used to compile the soldering workshop document. The document
relies on a markdown language I built [here](https://github.com/Henguin1001/Hentex). It is built
off of nodejs and uses xml for the templates. The template compiles to latex so nodejs, npm, and latex are
required to compile the document for yourself. The pdf for the workshop is in the [repository](https://github.com/FSUInnovationHub/Soldering-Workshop/blob/master/document_output.pdf).
The document has many images, so it is quite large and can take time to load. the github viewer probably won't work so use the download option.

## Compiling the Document
First Nodejs and npm need to be installed, then clone this repository.
Next, run `npm install` in the repository. This will add all the required dependencies. Finally run  `node index.js`
This should run the js script and the `pdflatex` command at the same time. So make sure
pdflatex is installed. If there is an error with document tex file, it will get stuck. The process can be ended with `ctrl-z`.
To get better error information, pdflatex can be run on the `document_output` file.

## Custom PCB
The workshop was done using circuit boards designed in EasyEDA. The project can be found [here](https://easyeda.com/henguin1001/soldering-workshop). It should
be possible make your own orders from this project. In the pcb editor there is a link that says `generate fabrication files`. It will ask you if you want to do a DRC check. You can ignore this. Then there will be a button labeled order from JLC PCB, this will take you to the JLC website where the boards can be ordered.

## Digikey parts
The parts for the kit can be ordered from this digikey cart [link](https://www.digikey.com/short/p7cw2n). Additionally, 9V batteries and LEDs
are required. The 9v battery snaps in the cart are a bit pricey and can be found for cheaper on amazon. For the workshop I had an assortment of LEDs from amazon available for the students to select custom colors, that is why they are not represented in the cart. The quantities in the cart can be changed, they are mostly selected to take advantage of some price breaks at a quantity of 15 kits.

## Giving Your Own Workshop
Anyone is free to use these resources to provide their own soldering workshop, I just ask that you credit me. Additionally, I would like if you star the
repository so I have an idea of how many people are using the materials.

### Errata
In the document there are a few inconsistencies. First, the schematic shows R3 and R4 to be different values then provided in the cart.
They should labeled with 750 Ohms instead of 620. Also, the images show the 555 Timer IC being soldered directly to the PCB, but the document instructs that
the IC socket should be used. These images would have to be retaken to fix it.
