const footerMenu = document.querySelector('.footer-menu');
const footerConfig = [
    {
        columnTitle: "Инструменты",
        childrens: [
        {
            title: 'Unreal Engine',
        },
        {
            title: 'UEFN',
        },
        {
            title: 'MetaHuman',
        },
        {
            title: 'Twinmotion',
        },
        {
            title: 'Megascans',
        },
        {
            title: 'RealityScan',
        },
        ]
    },
    {
        columnTitle: "Сетевые службы",
        childrens: [
            {
                title: 'Epic Online Services',
            },
            {
                title: 'Kids Web Services',
            },
            {
                title: 'Соглашение на обслуживание',
            },
            {
                title: 'Политика допустимого использования',
            },
            {
                title: 'Положение о доверии',
            },
            {
                title: 'Операторы данных',
            },
        ]
    },
    {
        columnTitle: "Магазин",
        childrens: [
            {
                title: 'Epic Game store',
            },
            {
                title: 'Fab',
            },
            {
                title: 'Sketchfab',
            },
            {
                title: 'ArtStation',
            },
        ]
    },
    {
        columnTitle: "Игры",
        childrens: [
            {
                title: 'Fortnite',
            },
            {
                title: 'Fall Guys',
            },
            {
                title: 'Unreal Tournament',
            },
        ]
    }

]

function renderFooterElements() {
    footerConfig.map(element => {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('footer-menu-list');

        renderUlTitleElement(ulElement, element.columnTitle)

        element.childrens.map(child => {
            renderLiElement(ulElement, child.title)
        });
    })
}

function renderUlTitleElement(ulElement, title) {
    const titleElement = document.createElement('li');
    titleElement.classList.add('footer-menu-item')
    titleElement.innerHTML = `
            <a href="#" class="footer-menu-link">${title}</a>
            `;
    ulElement.append(titleElement);
}

function renderLiElement(ulElement, title) {
    const liElement = document.createElement('li');
    liElement.innerHTML =
        `
            <a href="#" class="footer-menu-link">${title}</a>
            `
    liElement.classList.add('footer-menu-item');
    ulElement.append(liElement)
    footerMenu.append(ulElement)
}

renderFooterElements();