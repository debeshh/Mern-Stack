document.addEventListener("DOMContentLoaded",function(){
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.querySelector("#easy-label");
    const mediumLabel = document.querySelector("#medium-label");
    const hardLabel = document.querySelector("#hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");


    function validateUserName(username){
        if(username.trim() === ""){
            alert("username should not be empty");
            return false;
        }
        const ragex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = ragex.test(username);
        if(!isMatching){
            alert("Invalid username")
        }
        return isMatching;
    }


    async function fetchUserDetils(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch the user details");
        
            }
            const data = await response.json();
            console.log("Logging data: ",data);
            displayUserData(data);
        }
        catch(error){
            statsContainer.innerHTML = `<p>No Data Found</p>`
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }



    function updateProgress(solved, total, label, circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;

    }

    function displayUserData(data){
        const totalQues = data.totalQuestions;
        const totalEasyQues = data.totalEasy;
        const totalMediumQues = data.totalMedium;
        const totalHardQues = data.totalHard;


        const solvedTotalQues = data.totalSolved;
        const solvedEasyQues = data.easySolved;
        const solvedMediumQues = data.mediumSolved;
        const solvedHardQues = data.hardSolved;

        updateProgress(solvedEasyQues,totalEasyQues,easyLabel,easyProgressCircle);
        updateProgress(solvedMediumQues,totalMediumQues,mediumLabel,mediumProgressCircle);
        updateProgress(solvedHardQues,totalHardQues,hardLabel,hardProgressCircle);




    // "status": "success",
    // "message": "retrieved",
    // "totalSolved": 221,
    // "totalQuestions": 3617,
    // "easySolved": 75,
    // "totalEasy": 885,
    // "mediumSolved": 109,
    // "totalMedium": 1881,
    // "hardSolved": 37,
    // "totalHard": 851,
    // "acceptanceRate": 86.97,
    // "ranking": 556478,
    // "contributionPoints": 2342,
    // "reputation": 0,

        const cardData = [
            {label: "Overall Submissions", value:data.totalSolved},
            {label: "Easy Submissions", value:data.easySolved},
            {label: "Medium Submissions", value:data.mediumSolved},
            {label: "Hard Submissions", value:data.hardSolved},
        ];
        console.log(cardData);

        cardStatsContainer.innerHTML = cardData.map(data => {
            return `
            <div class="card">
            <h3>${data.label}</h3>
            <p> ${data.value}</p>
            `;
        }).join("");

    }

    searchButton.addEventListener('click',function(){
        const username = usernameInput.value;
        console.log("Logging username: " ,username);
        if(validateUserName(username)){
            fetchUserDetils(username);
        }
    })
})

