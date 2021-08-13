const dogFacts = 
    [
    {
        "fact": "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog."
    },
    {
        "fact": "Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days."
    },
    {
        "fact": "Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful."
    },
    {
        "fact": "Apple and pear seeds contain arsenic, which may be deadly to dogs."
    },
    {
        "fact": "Rock star Ozzy Osborne saved his wife Sharon’s Pomeranian from a coyote by tackling ad wresting the coyote until it released the dog."
    },
    {
        "fact": "Dogs have sweat glands in between their paws."
    },
    {
        "fact": "In 2003, Dr. Roger Mugford invented the \"wagometer,\" a device that claims to interpret a dog’s exact mood by measuring the wag of its tail."
    }
]

for (var i = 0; i < dogFacts.length; i++) {
        console.log(dogFacts[i])
        var element = document.createElement("li")
        document.getElementById("dogs").append(element)
        element.textContent = dogFacts[i].fact
    }
    
