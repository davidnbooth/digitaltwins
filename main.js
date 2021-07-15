const components = document.getElementById('gen_components').innerHTML;
const template = Handlebars.compile(components);

const context = {
    components: [
        {
            title: "T-Slotted Framing",
            description: 'Single Four Slot Rail, Silver, 1.5" High x 1.5" Wide, Solid',
            material: "6105-T5 Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/extrusion.png",
            ref_url: "https://www.mcmaster.com/47065T103",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "Short Corner Bracket",
            description: 'Silver Corner Bracket, 1.5" Long for 1.5" High Rail T-Slotted Framing',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/short_corner.png",
            ref_url: "https://www.mcmaster.com/47065T845/",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "Extended Corner Bracket",
            description: 'Silver Corner Bracket, 3" Long for 1-1/2" High Rail T-Slotted Framing',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/long_corner.png",
            ref_url: "https://www.mcmaster.com/47065T241/",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "Small Tee",
            description: ' for 1-1/2" High Rail T-Slotted Framing',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/tee.png",
            ref_url: "https://www.mcmaster.com/47065T279/",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "90 deg. Surface Bracket",
            description: 'Silver Corner Surface Bracket for 1.5" High Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/surface_90.png",
            ref_url: "https://www.mcmaster.com/47065T271/",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "90 deg. Flush Surface Bracket",
            description: 'Sliver Flush 90 Degree Angle Bracket for 1.5" High Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/flush_90.png",
            ref_url: "https://www.mcmaster.com/3136N158/",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "45 deg. Surface Bracket",
            description: 'Silver 45 Degree Bracket for 1.5" High Single Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/surface_45.png",
            ref_url: "https://www.mcmaster.com/47065T309/",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "30 deg. Surface Bracket",
            description: 'Silver 30 Degree Bracket for 1.5" High Single Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/surface_30.png",
            ref_url: "https://www.mcmaster.com/47065T32/",
            cad_file: "",
            fea_file: ""
        },
        {
            title: "60 deg. Surface Bracket",
            description: 'Silver 60 Degree Bracket for 1.5" High Single Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "images/surface_60.png",
            ref_url: "https://www.mcmaster.com/47065T366/",
            cad_file: "",
            fea_file: ""
        },
    ]
};

const content = document.getElementById('content');
const compiledHtml = template(context);
content.innerHTML = compiledHtml;
