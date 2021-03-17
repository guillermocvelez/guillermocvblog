const analyticsTracking = (event) => {
    if(typeof windows != 'undefined') {
        window.ga('send','event','social','clicks',event,{
            nonInteraction: true
        });
    }
};

export default analyticsTracking;