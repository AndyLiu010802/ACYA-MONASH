function check_review(index)
{
    window.location.href = "../html/review.html"
    localStorage.setItem('current_event_id',JSON.stringify(index))
}