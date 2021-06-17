function toggleText()
{
    var points = document.getElementById("points");
    var showMoreText = document.getElementById("moreText");
    var showMoreText2 =document.getElementById("moreText2");
    var showMoreText3 =document.getElementById("moreText3");
    var showMoreText4 =document.getElementById("moreText4");
    var buttonText = document.getElementById("textButton");
    
    if(points.style.display == "none")
    {
        showMoreText.style.display = "none";
        if(showMoreText2!=null)
        {
            showMoreText2.style.display = "none";
        }
        if(showMoreText3!=null)
        {
            showMoreText3.style.display = "none";
        }
        if(showMoreText4!=null)
        {
            showMoreText4.style.display = "none";
        }
        
        points.style.display = "inline";
        buttonText.innerHTML = "Show More";
    }
    else
    {
        showMoreText.style.display = "inline";
        
        if(showMoreText2!=null)
        {
            showMoreText2.style.display = "inline";
        }else{}
        if(showMoreText3!=null)
        {
            showMoreText3.style.display = "inline";
        }else{}
        if(showMoreText4!=null)
        {
            showMoreText4.style.display = "inline";
        }else{}
       
        points.style.display = "none";
        buttonText.innerHTML = "Show Less";
    }
}