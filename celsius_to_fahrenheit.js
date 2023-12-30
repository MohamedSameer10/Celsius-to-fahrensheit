function fahrenheit()
{

    const user_result = document.getElementById("result")

    const user_input = Number(document.getElementById("celsius_value").value)

    const container = document.querySelector(".container")

    container.classList.add("animate")

    user_result.classList.add("result")

    
    if( document.querySelector("input").value == ""){
        user_result.innerHTML = `<span style = "color:yellow;">Please Enter The Value</span>`
        container.append(user_result)
    }

    else{
        let user_result_value = user_input*(9/5)+32

        user_result.innerHTML = "<span>Result is</span> " + user_result_value + " Fahrenheit"
    }


}