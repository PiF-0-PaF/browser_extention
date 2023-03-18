function deleteBlock() {
    if (!!document.getElementsByClassName(
        "ContributionCalendar-day"
    )) {

        let i = document.getElementsByClassName(
            "ContributionCalendar-day"
            ) 
            for  (let j = 0; j < i.length; j++){
                i[j].dataset.level = Math.floor(Math.random() * 5) + 1
            }


        }
}

deleteBlock();