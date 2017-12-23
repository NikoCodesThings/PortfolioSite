$( document ).ready(function() {
    function openTab(linkName){
        window.open(linkName,'_blank');
    }

    $(".btn").click(function(event){
        if(event.target.id == 'twitter'){
            openTab('https://twitter.com/nikocodesthings');
        } else if(event.target.id == 'linkedin'){
            openTab('https://www.linkedin.com/in/nicholas-espinosa-a22a2680/');
        } else if(event.target.id == 'github'){
            openTab('https://github.com/NikoCodesThings');
        } else{
            openTab('https://www.freecodecamp.org/nikocodesthings');
        }
    });
});

