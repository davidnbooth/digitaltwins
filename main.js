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
            img_src: "components/extrusion/extrusion.png",
            ref_url: "https://www.mcmaster.com/47065T103",
            cad_file: "components/extrusion/extrusion.sldprt",
            fea_file: "components/extrusion/extrusion.script"
        },
        {
            title: "Short Corner Bracket",
            description: 'Silver Corner Bracket, 1.5" Long for 1.5" High Rail T-Slotted Framing',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "components/short_bracket/short_bracket.png",
            ref_url: "https://www.mcmaster.com/47065T845/",
            cad_file: "components/short_bracket/short_bracket.sldprt",
            fea_file: "components/short_bracket/short_bracket.script"
        },
        {
            title: "Extended Corner Bracket",
            description: 'Silver Corner Bracket, 3" Long for 1-1/2" High Rail T-Slotted Framing',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "components/extended_bracket/extended_bracket.png",
            ref_url: "https://www.mcmaster.com/47065T241/",
            cad_file: "components/extended_bracket/extended_bracket.sldprt",
            fea_file: "components/extended_bracket/extended_bracket.script"
        },
        {
            title: "90 deg. Surface Bracket",
            description: 'Silver Corner Surface Bracket for 1.5" High Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "components/90deg_surface/90deg_surface.png",
            ref_url: "https://www.mcmaster.com/47065T271/",
            cad_file: "components/90deg_surface/90deg_surface.sldprt",
            fea_file: "components/90deg_surface/90deg_surface.script"
        },
        {
            title: "45 deg. Surface Bracket",
            description: 'Silver 45 Degree Bracket for 1.5" High Single Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "components/45deg_surface/45deg_surface.png",
            ref_url: "https://www.mcmaster.com/47065T309/",
            cad_file: "components/45deg_surface/45deg_surface.sldprt",
            fea_file: "components/45deg_surface/45deg_surface.script"
        },
        {
            title: "30 deg. Surface Bracket",
            description: 'Silver 30 Degree Bracket for 1.5" High Single Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "components/30deg_surface/30deg_surface.png",
            ref_url: "https://www.mcmaster.com/47065T32/",
            cad_file: "components/30deg_surface/30deg_surface.sldprt",
            fea_file: "components/30deg_surface/30deg_surface.script"
        },
        {
            title: "60 deg. Surface Bracket",
            description: 'Silver 60 Degree Bracket for 1.5" High Single Rail',
            material: "Anodized Aluminum",
            finish: "Anodized",
            color: "Silver",
            img_src: "components/60deg_surface/60deg_surface.png",
            ref_url: "https://www.mcmaster.com/47065T366/",
            cad_file: "components/60deg_surface/60deg_surface.sldprt",
            fea_file: "components/60deg_surface/60deg_surface.script"
        },
    ]
};

const content = document.getElementById('content');
const compiledHtml = template(context);
content.innerHTML = compiledHtml;
