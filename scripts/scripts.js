function load() {


    let months = [
        ["September"],
        ["October"],
        ["November"],
        ["December"],
        ["January"],
        ["February"],
        ["March"],
        ["April"],
        ["May"],
        ["June"],
        ["July"],
        ["August"]
    ];


    for ( let i of months ) {
        switch ( i[0] ) {
            case "September":
                i.push("Labor Day", "Constitution Day");
                break;
            case "October":
                i.push("Halloween", "Columbus Day");
                break;
            case "November":
                i.push("Thanksgiving", "Veteran's Day");
                break;
            case "December":
                i.push("Christmas", "Kwanzaa");
                break;
            case "January":
                i.push("New Year's Day", "Opposite Day");
                break;
            case "February":
                i.push("Valentines Day", "Groundhog's Day");
                break;
            case "March":
                i.push("St. Patrick's Day", "International Earth Day");
                break;
            case "April":
                i.push("Good Friday", "Easter");
                break;
            case "May":
                i.push("Mother's Day", "Star Wars Day");
                break;
            case "June":
                i.push("Father's Day", "Flag Day");
                break;
            case "July":
                i.push("Independence Day", "National Hot Dog Day");
                break;
            case "August":
                i.push("National S'mores Day", "National Watermelon Day");
                break;
            default:
                break;
        }
        let html = `<div class="month">
            <div>
                <p style="font-weight: bold; color: #191970;">${i[0]}</p>
                <button class="custom-button" onclick="clicked(event)">See holidays</button>
                    <div class="hidden">
                        <p class="holiday">${i[1]}</p>
                        <p class="holiday">${i[2]}</p>
                    </div>
            </div>
        </div>`;
        document.getElementById("container").innerHTML += html;
    }


}


function clicked(e) {
    e.target.nextElementSibling.style.display = "block";
}


let selected = false;


function expandAll() {
    let x = document.getElementsByClassName("hidden");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}

