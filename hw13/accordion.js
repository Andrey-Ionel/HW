// new Accordeon(document.getElementById('list'));

// Классы можно использовать для определения хедеров и боди каждого элемента.

// Можно и нужно добавлять свои классы для стилизации и определения какой активный.

// По умолчанию всё содержимое должно быть скрыто. При клике на заголовок должен отобразиться соответсвующий body. Если сейчас открыт один элемент и мы нажали на другой header, то текущий закрывается, а новый открывается. Если всё время кликаем по существующему header то просто сменяем его состояние - открыт / закрыт.

// Более детально рассказал на занятии, думаю не должно остаться вопросов)

// Удачи ;)

const accordionHeadings = this.list.querySelectorAll('.title');
const accordionBodyContent = this.list.querySelectorAll('.body');
class Accordion {
    constructor(list) {
        this.list = list;

        this.init();
        this.createEventListener();
    }

    init() {
        accordionBodyContent.forEach((body) => {
            body.hidden = true;
        });
    }

    createEventListener() {
        this.list.addEventListener("click", (event) => {

            if (event.target.classList.contains('title')) {
                accordionHeadings.forEach((title) => {
                    title.classList.remove("accordion-active");
                });
                event.target.classList.add('accordion-active');

                const eventTargetBody = event.target.nextElementSibling;
                this.showAndHideContent(eventTargetBody);
            }

        });
    }

    showAndHideContent(body) {

        if (body.hasAttribute('hidden')) {
            accordionBodyContent.forEach((body) => {
                body.hidden = true;
            });

            body.hidden = false;

        } else {
            body.hidden = true;
        }

    }
}