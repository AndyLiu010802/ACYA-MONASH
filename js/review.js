document.querySelector("#create").addEventListener("click", function(){
    document.querySelector(".write-comment").classList.add("active");
});

document.querySelector("#close-btn").addEventListener("click", function(){
    document.querySelector(".write-comment").classList.remove("active");
});

let comment=class{
    constructor(comment_content, star_rating){
        this.comment_content = comment_content;
        this.star_rating = star_rating;
    }
}
function create_comment_btn(){
    document.querySelector("#save-comment").addEventListener("click", function(){
        document.querySelector(".write-comment").classList.remove("active");
    comment_content = document.getElementById("content").value
    star_rating = document.getElementById("star_rating").value
    var tag_name = document.getElementsByTagName("input")
    for (var i = 0 ; i < tag_name.length ; i++){
        if (tag_name[i].type == 'radio' && tag_name[i].checked){ var star_rating = tag_name[i].value}
    }
    });
    let comment_object = new comment(comment_content, star_rating);
    projectBacklogItemsParsed = JSON.parse(localStorage.getItem('projectBacklogItemArray'))
    projectBacklogItemsParsed.push(productBackLogItemObj)
    localStorage.setItem('projectBacklogItemArray',JSON.stringify(projectBacklogItemsParsed));
}

