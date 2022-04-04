var api = 'https://script.google.com/macros/s/AKfycbz1dgN3iYI07HIzfhLiXLrEo9vasu98tPr0CjTQXVHhMkDRpYpO-BWsBOJqt94hXaaMNA/exec'

// test Hassan
// var cv = {
//     general: {
//         website_name: document.getElementById('website_name'),
//         logo: document.getElementById('logo'),
//         h1: document.getElementById('h1'),
//         h2: document.getElementById('h2'),
//         cv: document.getElementById('cv') //as pdf
//     },
//     contact: {
//         email: '',
//         number: '',
//         location: '',
//         ig: '',
//         fb: '',
//         li: '',
//         tw: ''
//     },
//     personal: {
//         age: '',
//         about: '',
//         lang: ''
//     },
//     skills: [
//         { name: '', perc: '' }
//     ],
//     projects: [
//         { title: '', category: '', image: '' }
//     ]

// }
var data = {}

function LoadFromDB() {
    //step 1 is to fetch data from gsheets
    fetch(api).then(res => res.json()).then(res => {
        console.log(res)
        data = res
        console.log('data = ', data)
        document.getElementById('website_name').innerText = data.general.website_name
        document.getElementById('logo').src = data.general.logo
        document.getElementById('h1').innerText = data.general.h1
        document.getElementById('h2').innerText = data.general.h2
        document.getElementById('cv').href = data.general.cv

        document.getElementById('fb').href = data.contact.fb
        document.getElementById('tw').href = data.contact.tw
        document.getElementById('gh').href = data.contact.gh
        document.getElementById('li').href = data.contact.li
        createskill(data.skills)
    })
}

function createskill(allskills) {
    // var skills = document.getElementById('skills')
    var box = document.getElementById('skills-box')

    // console.log(skills.firstChild)

    allskills.forEach(s => {

        var skillname = document.createElement('span')
        skillname.innerText = s.name
        skillname.classList.add('progress-badge')

        var skillprogress = document.createElement('div')

        var skillprogressbar = document.createElement('div')
        skillprogressbar.ariaValueNow = s.perc
        skillprogressbar.classList.add('progress-bar')
        skillprogressbar.classList.add('progress-bar-primary')


        var skillperc = document.createElement('span')
        skillperc.innerText = s.perc
        skillperc.classList.add('progress-value')

        skillprogress.appendChild(skillprogressbar)
        skillprogress.appendChild(skillperc)

        document.getElementById('skillbox').appendChild(skillname)
        document.getElementById('skillbox').appendChild(skillprogress)



    });


}