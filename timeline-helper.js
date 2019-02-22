$(document).ready(function () {
    $(".card").hide();
});
$(".col-sm").click(function (e) {
    $(".card").show();
   let scene = parseInt(e.target.innerText.split(" ")[2]) - 1;
   $("#year").text(titles[scene]);
   $("#chars").text(chars[scene]);
   $("#descrs").text(descr[scene]);
   $("#themes").text(themes[scene]);
});

let titles = [
    "Unknown: This scene takes place before Ike is born",
    "1856", "1856", "1856", "1877", "1877", "1878", "1880", "1881", "1881", "1881", "1882", "1883","1883","1883","1884",
    "1884","1885","1886","1888","1888", "1888","1895","Later in time", "Later in time"
];
let chars = [
    "Eunice, Carothers, Thucydus, Tomasina, Tomey, Turl",
    "Buck, Buddy, McCaslin family slaves",
    "Buck, Buddy",
    "Hubert",
    "Ike, Sam Fathers",
    "Ike and Old Ben and Sam fathers",
    "Ike and Old Ben and Sam Fathers",
    "Ike",
    "Old Ben and the hunters",
    "Sam Fathers, Boon, Ike, and Lion",
    "Lion, Boon, and Sam Fathers",
    "Old Ben, Lion, Sam Fathers",
    "Ike and Boon",
    "Old Ben, Lion, Sam Fathers, Boon, Ike",
    "McCaslin, Boon",
    "Ike, Major de Spain",
    "All of the hunting crew except Major de Spain",
    "Ike",
    "Ike, James, Fonsiba, Fonsiba’s husband",
    "Ike and McCaslin",
    "Ike and McCaslin",
    "Ike and McCaslin",
    "Lucas",
    "Ike and Ike\'s wife",
    "Ike and Boon"
];
let descr = [
    "Ike reads about his grandfather Carothers McCaslin. Carothers buys a slave in New Orleans in 1807 named Eunice. She married another slave named Thucydus. Carothers has a child with Eunice named Tomasina, or Tomey. Carothers has another kid with Tomey (ew), named Turl. The evidence for this is that Carothers leaves Turl $1000 of his inheritance and that Eunice killed herself before Turl was born.",
    "The first flashback of the section shows how Ike’s father and uncle dealt with their inheritance. Like Ike, they were uncomfortable inheriting something they felt was immoral to own, however, in their case it was the slaves of their fathers plantation. Buck and Buddy choose to live in a small house they built and allow the slaves to live in the large plantation house. The two of them begrudgingly own the slaves, yet do not police their lives.",
    "Buck and Buddy discuss a slave who has no particular talents and they have nothing to do with him. The brothers free Percival and sell him a mule.",
    "Ike and McCaslin open Isaac’s inheritance from his uncle Hubert Beauchamp, which originally was a silver cup full of valuable coins, but over the years has been replaced by a tin coffee pot with a few coppers and a number of IOU’s inside. As Hubert grows older he has to sell off everything he owns because he doesn’t work. Hubert seems to be down with the fact that black people are people, which gets him some criticism from Ike’s mother",
    "Ike kills his first deer and becomes a hunter. During this Sam Fathers marks his face with blood. This experience makes Ike associate the woods with the spirit of the buck.",
    "ca. Age 10 - Ike encounters Old Ben for the first time. Old Ben was watching him for the whole time but Ike doesn’t realize.",
    "Age 11- Isaac gets his first gun and finally learns how to be a good hunter. He goes out with the gun, but Sam Fathers told him that the bear would not go near him if he was holding a gun. Each time Ike returns to search for Old Ben, he loses an essential item in hopes of encountering him. He finally sees Old Ben and they stare at each other; Ike does not do anything.",
    "Age 13 - Isaac is a great hunter. He knows all the territory within 25 miles. He has killed many animals, and is on his way to become a man.",
    "ca. Age 14 - A fyce goes with other dogs to chase after Old Ben. Old Ben gets on his hind legs and the other dogs run away; the fyce goes ahead. Isaac goes to get the dog, and then is next to Old Ben and Isaac doesn't shoot. The hunters realize they need a better, more fierce dog to finally kill Old Ben.",
    "Age 14 - A colt was killed by having one of its legs like ripped off and the hunters think the culprit was a panther, a wolf or Old Ben. Sam Fathers knows that it was none of these; it was a large wild dog. The hunters track the dog and capture it, stating that this dog would be what would pin down Old Ben. Over a month, Sam trains the dog by starving it to death then slowly nursing it back to health so it knew it would have to depend on the hunter to survive.",
    "The Dog is named lion and he starts to follow Sam Fathers around. Sam wants Boon to become the owner because he wants Boon to raise him. Lion starts leading the hunts to find Old Ben.",
    "Lion leads the hunt again and manages to catch Old Ben but Boon misses when shooting at Old Ben.",
    "It is a particularly cold winter. The hunters stay at the camp until Old Ben and Lion could do their annual race. However, they run out of whiskey so Boon and Isaac have to go to Memphis to get whiskey. Boon drinks everywhere he can while on the trip.",
    "The annual Old Ben and Lion chase of happens but this time,  Lion catches Old Ben and bites him in his throat. Then Boon jumps on the back of Old Ben and stabs him with a knife. While this is all happening, Sam falls to the ground. Sam says the line \“Let me out, master. Let me go home\”  and dies. Old ben and Lion die in the afternoon and people come.",
    "A week later, McCaslin and others sees Boon, not in the right sort of mind, standing over Lion’s grave and Mccaslin has talks about Boon killing someone and Boon says he didn't do it.",
    "Age 17- Major de Spain doesn't hunt anymore but lets them use the land.",
    "November of that same year - last time General Compson hunts",
    "Age 18- Major de Spain sells timber rights.  Isaac goes hunting one more time with Boon only to see that there is a mill being built on the land. It marks the end of an era for Ike. He will never return to hunt on that ground again.",
    "In an attempt to make up for the bad things Ike’s family has done, he tries to track down his relatives in the McCaslin shadow family in order to give them their inheritance. He first tries to track down James, the son of Tennies and Turl, but he has vanished. The next attempt was to find Fonsiba, who has married a man and moved to Arkansas. She and he struggle to make their pension last the month, but when Ike asks if she is ok, she simply replies that she is free. Ike sets up a bank account to send them a small portion of her inheritance every month.",
    "This section is almost entirely a drawn-out argument between McCaslin and Ike over who will inherit the McCaslin family plantation. Ike has finally come of age to inherit his family’s wealth, yet he repudiates it and claims no one can own land. The two of them go at it for some time, and Ike cites many philosophies both biblical and Native American in nature to support his argument. Interspersed in this argument are flashbacks to important moments in McCaslin family history.",
    "Ike goes on a long rant about the curse of the South, God’s role in everything, and all the reasons he’s giving up his inheritance. Ike says the black population of the south will outlast the white, and McCaslin makes some racist remarks",
    "Ike accepts his McCaslin inheritance only in the form of a loan from McCaslin. He uses the money and lives with Major de Spain and General Compson for a while before getting a job as a carpenter and trying to pay McCaslin back, who won’t accept the money",
    "Lucas Quintus Carothers McCaslin Beauchamp comes to McCaslin looking for his inheritance. He’s changed his name away from that of Old Carothers.",
    "Ike gets married to “the wife” and they don’t ever have sex because she wants him to accept his inheritance",
    "Isaac returns to the forest and goes to Lion and Sam's grave. He sees a snake and believes it to be Sam Fathers. Then we see Boon hammering squirrels under the gum tree."
];
let themes = [
    "Race Relations, Ownership",
    "Race Relations, Ownership",
    "Race Relations, Ownership",
    "Ownership, Action vs. Inaction",
    "Wild vs. Human",
    "Wild vs. Human, Action vs. Inaction",
    "Action vs. Inaction, Wild vs. Human",
    "Wild vs. Human",
    "Wild vs. Human, Fate",
    "Wild vs. Human, Fate",
    "Race Relations, Fate, Wild vs. Human",
    "Fate, Wild vs. Human",
    "(No major themes associated)",
    "Fate, Wild vs. Human",
    "(No major themes associated)",
    "(No major themes associated)",
    "(No major themes associated)",
    "Fate, Loss of Wilderness",
    "Race Relations, Fate, Ownership, Action vs. Inaction",
    "All themes",
    "Biblical Creation",
    "Ownership, Fate",
    "Ownership, Race Relations",
    "Wild vs. Human, Loss of Wilderness",
    "(No major themes associated)"
];