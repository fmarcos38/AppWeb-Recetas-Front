import { GET_RECETAS, LOAD } from "../actions/actionsType";

const initialState = {
    allRecetas: [],
    /* allRecetas: [
        {
            "id": 782585,
            "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
            "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately 45 minutes from start to finish. This main course has 482 calories, 31g of protein, and 6g of fat per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs $1.35 per serving. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe earns a spoonacular score of 70%, which is pretty good. Similar recipes are Cannellini Bean Salad, Refreshing Cannellini Bean Salad, and Cannellini-and-Green Bean Salad.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                },
                {
                    "name": "lacto ovo vegetarian"
                },
                {
                    "name": "vegan"
                }
            ],
            "healthScore": 100,
            "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                "2- Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                "3- Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                "4- Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                "5- Transfer to the salad bowl.Now cook the mushrooms.",
                "6- Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                "7- Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                "8- Pour the dressing over the salad, season with salt and pepper, and toss.",
                "9- Serve at room temperature or chilled."
            ]
        },
        {
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has 192 calories, 7g of protein, and 6g of fat per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes roughly 30 minutes. Overall, this recipe earns a spectacular spoonacular score of 100%. If you like this recipe, you might also like recipes such as Cauliflower, Brown Rice, and Vegetable Fried Rice, Cauliflower, Brown Rice, and Vegetable Fried Rice, and Cauliflower, Brown Rice, and Vegetable Fried Rice.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                },
                {
                    "name": "lacto ovo vegetarian"
                },
                {
                    "name": "vegan"
                }
            ],
            "healthScore": 75,
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
                "2- Heat 1T butter and 1T oil in a large skillet over medium heat.",
                "3- Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
                "4- Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
                "5- Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
                "6- Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
                "7- Add the peas and broccoli and stir again.",
                "8- Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
                "9- Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice."
            ]
        },
        {
            "id": 715497,
            "title": "Berry Banana Breakfast Smoothie",
            "summary": "If you want to add more lacto ovo vegetarian recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about 21g of protein, 10g of fat, and a total of 457 calories. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly 5 minutes. It is brought to you by Pink When. Overall, this recipe earns a super spoonacular score of 99%. Similar recipes include Berry Banana Breakfast Smoothie, Berry Banana Breakfast Smoothie, and Berry Banana Breakfast Smoothie.",
            "diets": [
                {
                    "name": "lacto ovo vegetarian"
                }
            ],
            "healthScore": 64,
            "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- Take some yogurt in your favorite flavor and add 1 container to your blender.",
                "2- Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve."
            ]
        },
        {
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as Red Lentil and Chicken Soup, Red Lentil and Chicken Soup, and Red-Lentil Soup.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                }
            ],
            "healthScore": 100,
            "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- To a large dutch oven or soup pot, heat the olive oil over medium heat.",
                "2- Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
                "3- Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
                "4- Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
                "5- Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
            ]
        },
        {
            "id": 716406,
            "title": "Asparagus and Pea Soup: Real Convenience Food",
            "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately 20 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 217 calories, 11g of protein, and 8g of fat per serving. This recipe serves 2. For $1.78 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is outstanding. Try Asparagus and Pea Soup: Real Convenience Food, Asparagus and Pea Soup: Real Convenience Food, and Asparagus and Pea Soup: Real Convenience Food for similar recipes.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                },
                {
                    "name": "paleolithic"
                },
                {
                    "name": "lacto ovo vegetarian"
                },
                {
                    "name": "primal"
                },
                {
                    "name": "vegan"
                }
            ],
            "healthScore": 100,
            "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- Chop the garlic and onions.",
                "2- Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent.",
                "3- Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender.",
                "4- Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt."
            ]
        },
        {
            "id": 644387,
            "title": "Garlicky Kale",
            "summary": "Garlicky Kale requires approximately 45 minutes from start to finish. This side dish has 170 calories, 2g of protein, and 15g of fat per serving. This recipe serves 2. For 69 cents per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 99%, this dish is outstanding. Try Garlicky Kale, Garlicky Kale, and Garlicky Kale for similar recipes.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                },
                {
                    "name": "paleolithic"
                },
                {
                    "name": "lacto ovo vegetarian"
                },
                {
                    "name": "primal"
                },
                {
                    "name": "whole 30"
                },
                {
                    "name": "vegan"
                }
            ],
            "healthScore": 83,
            "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- Heat the olive oil in a large pot over medium heat.",
                "2- Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
                "3- Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
                "4- Serve hot."
            ]
        },
        {
            "id": 715446,
            "title": "Slow Cooker Beef Stew",
            "summary": "If you want to add more gluten free and dairy free recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains 434 calories, 44g of protein, and 12g of fat. This recipe serves 6. For $2.7 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately 8 hours and 10 minutes. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. Autumn will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is awesome. Similar recipes include Slow Cooker Beef Stew, Slow Cooker Beef Stew, and Slow Cooker Beef Stew.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                }
            ],
            "healthScore": 100,
            "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- To get started, heat your slow cooker to low.",
                "2- Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
                "3- Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them."
            ]
        },
        {
            "id": 782601,
            "title": "Red Kidney Bean Jambalaya",
            "summary": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately 18g of protein, 6g of fat, and a total of 393 calories. For $1.68 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a tremendous spoonacular score of 99%. Users who liked this recipe also liked Red Kidney Bean Jambalaya, Red Kidney Bean Salad, and Red Kidney Bean Curry.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                },
                {
                    "name": "lacto ovo vegetarian"
                },
                {
                    "name": "vegan"
                }
            ],
            "healthScore": 96,
            "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
                "2- Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
                "3- Drain and set aside.",
                "4- Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
                "5- Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
                "6- Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired."
            ]
        },
        {
            "id": 795751,
            "title": "Chicken Fajita Stuffed Bell Pepper",
            "summary": "Chicken Fajita Stuffed Bell Pepper takes approximately 45 minutes from beginning to end. Watching your figure? This gluten free recipe has 526 calories, 50g of protein, and 24g of fat per serving. For $4.35 per serving, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is amazing. Users who liked this recipe also liked Stuffed Bell Peppers, Stuffed Bell Pepper, and Stuffed Bell Pepper.",
            "diets": [
                {
                    "name": "gluten free"
                }
            ],
            "healthScore": 85,
            "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- To get started heat oven to 35",
                "2- Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side.",
                "3- Cut the bell pepper in half (if you havent already) and clean out the seeds.",
                "4- Layer quinoa and then grilled chicken into the pepper, and then top each with cheese.",
                "5- Place in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper",
                "6- Top with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!"
            ]
        },
        {
            "id": 766453,
            "title": "Hummus and Za'atar",
            "summary": "You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about 34g of protein, 31g of fat, and a total of 778 calories. For $1.61 per serving, this recipe covers 44% of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a great spoonacular score of 98%. Chopped Hummus Dip with Za'atar, Mediterranean Hummus Toast with Za’atar, and Hummus Deviled Eggs with Za’atar {Exercise Challenge} are very similar to this recipe.",
            "diets": [
                {
                    "name": "gluten free"
                },
                {
                    "name": "dairy free"
                },
                {
                    "name": "lacto ovo vegetarian"
                },
                {
                    "name": "vegan"
                }
            ],
            "healthScore": 100,
            "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
            "createdInDb": false,
            "stepByStep": [
                "1- Rinse the chickpeas and soak for 8 hours or overnight in several inches of water.",
                "2- Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft.",
                "3- Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned.",
                "4- Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired.",
                "5- Transfer the hummus to a shallow bowl and drizzle with olive oil.",
                "6- Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month."
            ]
        }
    ], */
    TiposDietas: [
        {
            tipo: "Sin Gluten",
            descripcion: "Eliminar el gluten significa evitar el trigo, la cebada, el centeno y otros cereales que contienen gluten y los alimentos elaborados con ellos (o que pueden haber sido contaminados de forma cruzada)"
        },
        {
            tipo: "Cetogénico",
            descripcion: "La dieta cetogénica se basa más en la proporción de grasas, proteínas y carbohidratos en la dieta que en ingredientes específicos. En términos generales, los alimentos ricos en grasas y proteínas son aceptables y los alimentos ricos en carbohidratos no lo son. La fórmula que utilizamos tiene un contenido de grasa del 55-80 %, un contenido de proteína del 15-35 % y menos del 10 % de carbohidratos"
        },
        {
            tipo: "Vegetariano",
            descripcion: "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina."
        },
        {
            tipo: "Lacto vegetariana",
            descripcion: "Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener huevo."
        },
        {
            tipo: "Ovo-Vegetariano",
            descripcion: "Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener lácteos."
        },
        {
            tipo: "Vegano",
            descripcion: "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina, ni puede contener huevos, lácteos o miel."
        },
        {
            tipo:"Paleo",
            descripcion: "Los ingredientes permitidos incluyen carne (especialmente alimentada con pasto), pescado, huevos, verduras, algunos aceites (por ejemplo, aceite de coco y de oliva) y, en cantidades más pequeñas, frutas, nueces y batatas. También permitimos la miel y el jarabe de arce (populares en los postres Paleo, pero los seguidores estrictos de Paleo pueden no estar de acuerdo). Los ingredientes no permitidos incluyen legumbres (p. ej., frijoles y lentejas), granos, productos lácteos, azúcar refinada y alimentos procesados."
        },
        {
            tipo:"Primitivo",
            descripcion: "Muy similar a Paleo, excepto que se permiten lácteos: piense en leche cruda y entera, mantequilla, ghee, etc."
        },
        {
            tipo: "FODMAP bajo",
            descripcion:"Una dieta baja en carbohidratos fermentables (FODMAP, por sus siglas en inglés) que son tipos de carbohidratos en los alimentos, puede ayudar a algunas personas con SII a controlar sus síntomas."
        },
    ],    
    load: false,
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case LOAD: {
            return{
                ...state,
                load: true
            }
        }
        case GET_RECETAS:{
            console.log("respuestaB:",  action.payload)
            return{
                ...state,
                allRecetas: action.payload,
                load: false
            }
        }
        default:
            return state;
    };
};


/* 

recetas: [
        {
            "_id": "64b5a35d0b6aac6ab9897b92",
            "title": "pep",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        },
        {
            "_id": "64b5b3df5406b6d7aea56e37",
            "title": "brenjenas",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        },
        {
            "_id": "64b68bbec244044bb1c20abc",
            "title": "lechon",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        },
        {
            "_id": "64b7d94431a643abb0fc7c28",
            "title": "estofado",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        },
        {
            "_id": "64b5a35d0b6aac6ab9897b92",
            "title": "pep",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        },
        {
            "_id": "64b5b3df5406b6d7aea56e37",
            "title": "brenjenas",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        },
        {
            "_id": "64b68bbec244044bb1c20abc",
            "title": "lechon",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        },
        {
            "_id": "64b7d94431a643abb0fc7c28",
            "title": "estofado",
            "image": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/03/berenjena.jpg",
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                            "ingredients": [
                                {
                                    "id": 10716050,
                                    "name": "cannellini beans",
                                    "localizedName": "cannellini beans",
                                    "image": "cooked-cannellini-beans.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 480,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                            "ingredients": [
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                            "ingredients": [
                                {
                                    "id": 93604,
                                    "name": "curry leaves",
                                    "localizedName": "curry leaves",
                                    "image": "curry-leaves.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 60,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                            "ingredients": [
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 9156,
                                    "name": "lemon zest",
                                    "localizedName": "lemon zest",
                                    "image": "zest-lemon.jpg"
                                },
                                {
                                    "id": 11011,
                                    "name": "asparagus",
                                    "localizedName": "asparagus",
                                    "image": "asparagus.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 2041,
                                    "name": "tarragon",
                                    "localizedName": "tarragon",
                                    "image": "tarragon.jpg"
                                },
                                {
                                    "id": 2046,
                                    "name": "mustard",
                                    "localizedName": "mustard",
                                    "image": "regular-mustard.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Serve at room temperature or chilled.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "__v": 0
        }
    ],


*/