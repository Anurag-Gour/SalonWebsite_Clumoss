
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
            img: 'https://media.istockphoto.com/id/186775697/photo/laughing-diverse-girlfriends-enjoying-girls-day-out-at-the-spa.jpg?s=612x612&w=0&k=20&c=Nk9ztwpbwXvgIH_1YLlNksE58SyYl_iRc6U8uF3JzW8=',
            price: 35,
            description: "Treat your feet to a pampering pedicure experience. Includes exfoliation, nail shaping, cuticle care, callus removal, massage, and polish application."
        },
        NailArt: {
            img: 'https://media.istockphoto.com/id/1161753528/photo/nail-stylist-decorating-fingernail.jpg?s=612x612&w=0&k=20&c=ibGYbkhgdKN-1_YLQbp70MVcZd7pqLKtmlUuGehfezM=',
            price: 20,
            description: "Express yourself with creative nail art designs. Choose from a variety of colors, patterns, and embellishments to adorn your nails."
        },
        BodyWrap: {
            img: 'https://media.istockphoto.com/id/454953473/photo/green-clay-treatment-at-spa.jpg?s=612x612&w=0&k=20&c=r7Ih5j9MN_bGNVRezf7e_K795XbSdtxPjKXSf-4kLkE=',
            price: 60,
            description: "Indulge in a detoxifying body wrap to firm and tone your skin. Helps to eliminate toxins, reduce cellulite, and improve skin texture."
        },
        MakeUP: {
            img: 'https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA=',
            price: 40,
            description: "Enhance your natural beauty with our premium cosmetics service. Professional makeup application for any occasion, ensuring a flawless finish."
        },
        Reflexology: {
            img: 'https://media.istockphoto.com/id/1304128018/photo/healthcare-spa-and-massage-thai-concept-close-up-hands-of-thai-masseuse-woman-getting-massage.jpg?s=612x612&w=0&k=20&c=GUZgFnTsVTJgOz4GPpWkrmTMgzFCrJLQ_aXmfOEHYyo=',
            price: 55,
            description: "Restore balance and harmony to your body with our reflexology treatment. Pressure is applied to specific points on the feet to stimulate healing and relaxation throughout the body."
        }

    },



    hair: {
        HairCut: {
            img: 'https://media.istockphoto.com/id/522305300/photo/everything-should-be-perfect.jpg?s=612x612&w=0&k=20&c=ZvLytsrVEnGFexw7Bf6KkwyfPBCUPQPBhd_eCU28M-Y=',
            price: 40,
            description: "Professional haircut by experienced hairstylists."
        },
        HairColoring: {
            img: "https://media.istockphoto.com/id/163654601/photo/getting-some-bright-new-highlights.jpg?s=612x612&w=0&k=20&c=aVrpeU51eSHHzkmsH9s4r6FP5edIPNAmX_0IY_o68aE=",
            price: 80,
            description: "Hair coloring service using high-quality products for vibrant results."
        },
        HairStyling: {
            img: "https://media.istockphoto.com/id/1488257764/photo/young-female-hairdresser-offering-hairstyling-to-woman-client.jpg?s=612x612&w=0&k=20&c=KP10PAuqn1K6f5BPYHPtFqlUEOSe9KrEUAA-GoPVzkQ=",
            price: 60,
            description: "Hair styling for special occasions to complement your look."
        },
        HairTreatment: {
            img: "https://media.istockphoto.com/id/1328333210/photo/directly-above-asian-chinese-female-lying-down-for-hair-wash-at-hair-salon-with-eyes-closed.webp?b=1&s=170667a&w=0&k=20&c=jhxpv0jGJ8MNJqQAalcOijmAipk24FwDVQpiqz-J5ek=",
            price: 70,
            description: "Hair treatment to nourish and repair damaged hair for improved health and shine."
        },
        HairExtensions: {
            img: "https://media.istockphoto.com/id/921879992/photo/the-hairdresser-does-hair-extensions-to-a-young-girl-a-blonde-in-a-beauty-salon.jpg?s=612x612&w=0&k=20&c=z03YVYttRdS6Zhki44fpqBd1ix--Fc3CGG16sEwX6gQ=",
            price: 100,
            description: "Hair extensions for added length and volume for a glamorous hairstyle."
        }
    },
    facial: {
        DeepCleansing: {
            img: "https://media.istockphoto.com/id/471039408/photo/woman-at-the-spa.webp?b=1&s=170667a&w=0&k=20&c=YTmIETm37X0vo65wvQLAPfvaBBbEWCUKGBcQ4zwsenI=",
            price: 80,
            description: "Deep cleansing facial for refreshed and rejuvenated skin."
        },
        AntiAging: {
            img: "https://media.istockphoto.com/id/1255188868/photo/spa-therapist-putting-facial-mask-for-young-lady.webp?b=1&s=170667a&w=0&k=20&c=E8Qx5IxCdV46ON9Xbq5jAw1YSluRvbAMpEVV2KVycQg=",
            price: 90,
            description: "Anti-aging facial to reduce wrinkles and improve skin elasticity."
        },
        Hydrating: {
            img: "https://media.istockphoto.com/id/1037735968/photo/best-friends-talking-over-cup-of-tea.jpg?s=612x612&w=0&k=20&c=HyTj92dn-IGTY2QXrPtH3jdIDItPn25OWI_GMaL0prE=",
            price: 70,
            description: "Hydrating facial to replenish moisture and restore skin's natural glow."
        },
        Brightening: {
            img: "https://media.istockphoto.com/id/1450999423/photo/detoxifying-skin-treatment.webp?b=1&s=170667a&w=0&k=20&c=Aes6Ks0y8dccJp3iIBrI-aOcKeILLzQwoljDnshcU3g=",
            price: 75,
            description: "Brightening facial to even out skin tone and reduce dark spots."
        },
        AcneTreatment: {
            img: "https://media.istockphoto.com/id/1252844279/photo/skin-care-routine.webp?b=1&s=170667a&w=0&k=20&c=3vWX02o1MOQhNfLbrTBKgsUvwMZtxpkWUCX6WR0dNGc=",
            price: 85,
            description: "Acne treatment facial to target and prevent breakouts for clear skin."
        }
    },

    waxing: {
        EyeBrows: {
            img: "https://media.istockphoto.com/id/1180493213/photo/professional-eyebrow-care.jpg?s=612x612&w=0&k=20&c=Ulcv0oqs35iwv1LUukNJPq3TbFfTUl-imJSnOSEiXCU=",
            price: 15,
            description: "Eyebrow waxing to shape and define eyebrows for a polished look."
        },
        Legs: {
            img: "https://media.istockphoto.com/id/847286644/photo/wax-treatment.webp?b=1&s=170667a&w=0&k=20&c=0peoq3F-w9RKWp7yh-PqVII_7oYVsRxmFvIkK8DLiUM=",
            price: 50,
            description: "Leg waxing to remove unwanted hair for smooth and silky legs."
        },
        Bikini: {
            img: "https://media.istockphoto.com/id/536757394/photo/armpit-epilation-treatment.jpg?s=612x612&w=0&k=20&c=wfZIfLMEf6R_MeJyVD3r8J_25HPTX0mQniixySZOr28=",
            price: 40,
            description: "Bikini waxing for tidy and groomed bikini area for confident beach days."
        },
        Brazilian: {
            img: "https://media.istockphoto.com/id/1159184004/photo/close-up-hands-of-cosmetologist-in-blue-gloves-applying-golden-paste-for-sugaring-depilation.jpg?s=612x612&w=0&k=20&c=Dylci1IP1RKdTsNenV0t4rEL_Pzd8jSo-r6wEohgKBQ=",
            price: 60,
            description: "Brazilian waxing for smooth and hair-free intimate areas."
        },
        FullBody: {
            img: "https://media.istockphoto.com/id/1073859644/photo/slim-woman-wearing-sports-underwear-having-depilation.webp?b=1&s=170667a&w=0&k=20&c=TfNNMiVyZPslm1cmZn3BYDDtISJKNCUwj2_TzX0Gm1U=",
            price: 200,
            description: "Full body waxing for complete hair removal and silky smooth skin."
        }
    },
    massage: {
        SwedishMassage: {
            img: "https://media.istockphoto.com/id/463498243/photo/woman-having-a-massage.jpg?s=612x612&w=0&k=20&c=3Wer06WjGKXA1c3pFop83gOcNiu40mOa2jYO_ShgAgM=",
            price: 60,
            description: "Swedish massage for relaxation and stress relief with long, flowing strokes."
        },
        DeepTissueMassage: {
            img: "https://media.istockphoto.com/id/518144690/photo/woman-having-ayurvedic-spa-treatment.webp?b=1&s=170667a&w=0&k=20&c=U4yIBsQRbnt1ampzy8kdzEb5ho88p2TSiW5o6nGZFNw=",
            price: 70,
            description: "Deep tissue massage to target knots and tension in muscles for pain relief."
        },
        HotStoneMassage: {
            img: "https://plus.unsplash.com/premium_photo-1661682603994-130f6c60b975?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
            price: 80,
            description: "Hot stone massage for deep relaxation and muscle relaxation with heated stones."
        },
        AromatherapyMassage: {
            img: "https://media.istockphoto.com/id/1372664128/photo/shot-of-an-attractive-young-woman-getting-a-massage-at-a-spa.webp?b=1&s=170667a&w=0&k=20&c=z5yXY8gR2sBx3cUATttlqDHnyZQFhGqvCALWA1UUPOo=",
            price: 75,
            description: "Aromatherapy massage using essential oils to promote relaxation and wellbeing."
        },
        SportsMassage: {
            img: "https://media.istockphoto.com/id/1332205323/photo/chiropractor-doing-massage-of-the-patients-back.webp?b=1&s=170667a&w=0&k=20&c=kZ4LguFDXArleFxI8v2K-C8UFPNF90AUPINwcOY3t_Q=",
            price: 85,
            description: "Sports massage to improve athletic performance and prevent injuries with targeted techniques."
        }
    }

};

let selectedService; 
