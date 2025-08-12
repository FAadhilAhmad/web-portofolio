let btnMore =document.getElementById('btnMore');


btnMore.addEventListener('click', () => {
    let servicesSection = document.getElementById('Service');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
});
