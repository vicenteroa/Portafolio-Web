// ScriptRoll.js
const handleScroll = () => {
    const images = document.querySelectorAll('.img-cont img');
    const triggerBottom = window.innerHeight * 0.9;

    images.forEach((image) => {
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < triggerBottom) {
            image.style.opacity = '1';
            image.style.transform = 'translateX(0) translateY(0)';
        }
    });
};

export default handleScroll;
