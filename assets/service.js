
function displayServiceDetails(subtype) {
    const service = selectedService[subtype];
    document.getElementById("serviceName").textContent = subtype;
    document.getElementById("serviceImg").src = service.img;
    document.getElementById("servicePrice").textContent = service.price + " $";
    document.getElementById("serviceDescription").textContent = service.description;
    document.getElementById("serviceDetails").style.display = "block";
}



function populateSubtypes(serviceType) {
    const subtypes = Object.keys(servicesobj[serviceType]);
    const subtypeContainer = document.getElementById("subtypes");

    subtypeContainer.innerHTML = "";


    subtypes.forEach(subtype => {
        const button = document.createElement("button");
        button.textContent = subtype;
        button.classList.add("btn", "btn-link");
        button.style.textDecoration = "none";
        button.style.color = "black";
        button.style.margin = "6px";
        button.style.display = "block";

        button.onclick = function () {

            const buttons = subtypeContainer.getElementsByTagName("button");

            Array.from(buttons).forEach(btn => {
                btn.classList.remove("active");
            });
            button.classList.add("active");
            displayServiceDetails(subtype);
        };
        subtypeContainer.appendChild(button);
    });


    if (subtypes.length > 0) {
        displayServiceDetails(subtypes[0]);
    }
}

function showService(serviceType) {
    selectedService = servicesobj[serviceType];
    populateSubtypes(serviceType);

}
document.addEventListener('DOMContentLoaded', function () {
    showService('spa');
});

let servicesobj = {
    spa: {

        Pedicure: {
            img: "../assets/SPA1.png",
            price: 35,
            description: "Treat your feet to a pampering pedicure experience. Includes exfoliation, nail shaping, cuticle care, callus removal, massage, and polish application."
        },
        NailArt: {
            img:"../assets/SPA2.png",
            price: 20,
            description: "Express yourself with creative nail art designs. Choose from a variety of colors, patterns, and embellishments to adorn your nails."
        },
        BodyWrap: {
            img: "../assets/SPA3.png",
            price: 60,
            description: "Indulge in a detoxifying body wrap to firm and tone your skin. Helps to eliminate toxins, reduce cellulite, and improve skin texture."
        },
        MakeUP: {
            img:"../assets/SPA4.png",
            price: 40,
            description: "Enhance your natural beauty with our premium cosmetics service. Professional makeup application for any occasion, ensuring a flawless finish."
        },
        Reflexology: {
            img: "../assets/SPA5.png",
            price: 55,
            description: "Restore balance and harmony to your body with our reflexology treatment. Pressure is applied to specific points on the feet to stimulate healing and relaxation throughout the body."
        }

    },



    hair: {
        HairCut: {
            img: "../assets/HAIR1.png",
            price: 40,
            description: "Professional haircut by experienced hairstylists."
        },
        HairColoring: {
            img: "../assets/HAIR2.png",
            price: 80,
            description: "Hair coloring service using high-quality products for vibrant results."
        },
        HairStyling: {
            img: "../assets/HAIR3.png",
            price: 60,
            description: "Hair styling for special occasions to complement your look."
        },
        HairTreatment: {
            img: "../assets/HAIR4.png",
            price: 70,
            description: "Hair treatment to nourish and repair damaged hair for improved health and shine."
        },
        HairExtensions: {
            img: "../assets/HAIR5.png",
            price: 100,
            description: "Hair extensions for added length and volume for a glamorous hairstyle."
        }
    },
    facial: {
        DeepCleansing: {
            img: "../assets/FACE1.png",
            price: 80,
            description: "Deep cleansing facial for refreshed and rejuvenated skin."
        },
        AntiAging: {
            img: "../assets/FACE2.png",
            price: 90,
            description: "Anti-aging facial to reduce wrinkles and improve skin elasticity."
        },
        Hydrating: {
            img: "../assets/FACE3.png",
            price: 70,
            description: "Hydrating facial to replenish moisture and restore skin's natural glow."
        },
        Brightening: {
            img:"../assets/FACE4.png",
            price: 75,
            description: "Brightening facial to even out skin tone and reduce dark spots."
        },
        AcneTreatment: {
            img: "../assets/FACE5.png",
            price: 85,
            description: "Acne treatment facial to target and prevent breakouts for clear skin."
        }
    },

    waxing: {
        EyeBrows: {
            img: "../assets/WAX1.png",
            price: 15,
            description: "Eyebrow waxing to shape and define eyebrows for a polished look."
        },
        Legs: {
            img: "../assets/WAX2.png",
            price: 50,
            description: "Leg waxing to remove unwanted hair for smooth and silky legs."
        },
        Bikini: {
            img: "../assets/WAX3.png",
            price: 40,
            description: "Bikini waxing for tidy and groomed bikini area for confident beach days."
        },
        Brazilian: {
            img: "../assets/WAX4.png",
            price: 60,
            description: "Brazilian waxing for smooth and hair-free intimate areas."
        },
        FullBody: {
            img: "../assets/WAX5.png",
            price: 200,
            description: "Full body waxing for complete hair removal and silky smooth skin."
        }
    },
    massage: {
        SwedishMassage: {
            img:"../assets/Massage1.png",
            price: 60,
            description: "Swedish massage for relaxation and stress relief with long, flowing strokes."
        },
        DeepTissueMassage: {
            img: "../assets/Massage2.png",
            price: 70,
            description: "Deep tissue massage to target knots and tension in muscles for pain relief."
        },
        HotStoneMassage: {
            img:"../assets/Massage3.png",
            price: 80,
            description: "Hot stone massage for deep relaxation and muscle relaxation with heated stones."
        },
        AromatherapyMassage: {
            img:"../assets/Massage4.png",
            price: 75,
            description: "Aromatherapy massage using essential oils to promote relaxation and wellbeing."
        },
        SportsMassage: {
            img: "../assets/Massage5.png",
            price: 85,
            description: "Sports massage to improve athletic performance and prevent injuries with targeted techniques."
        }
    }

};

let selectedService; 
