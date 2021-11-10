(function(){
    function start(){
        console.log('App Started');
        let deleteBtns = document.querySelectorAll('.btn-danger');

        for(button of deleteBtns){
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure ?")){
                    event.preventDefault();
                    window.location.assign('/user-list');
                }
            });
        }
    }
    window.addEventListener("load",start);
})();