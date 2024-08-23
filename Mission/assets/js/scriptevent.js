const events = [
    {
        id: 1,
        title: "Teacher’s Day",
        description: "Teacher’s Day is celebrated to honor the dedication and hard work of teachers. The event features speeches, performances, and activities that show appreciation for teachers.",
        imgSrc: "assets/img/child.jpg"
    },
    {
        id: 2,
        title: "Exhibition and Seminar on Mathematics",
        description: "This event showcases various mathematical concepts through exhibitions and seminars. It’s an opportunity for students to explore and learn more about mathematics in an engaging way.",
        imgSrc: "assets/img/child.jpg"
    },
    {
        id: 3,
        title: "Annual Sports Meet",
        description: "The Annual Sports Meet is a time of excitement and competition. Students participate in various sports activities, showcasing their athletic skills and team spirit.",
        imgSrc: "assets/img/child.jpg"
    },
    {
        id: 4,
        title: "Rabindra Jayanti",
        description: "Rabindra Jayanti celebrates the birth anniversary of Rabindranath Tagore. The event includes cultural programs, recitations, and discussions about his contributions to literature and arts.",
        imgSrc: "assets/img/child.jpg"
    },
    {
        id: 5,
        title: "Wall Magazine",
        description: "The Wall Magazine is a platform for students to showcase their creativity. It includes articles, art, and poems that reflect the thoughts and talents of the students.",
        imgSrc: "assets/img/child.jpg"
    },
    {
        id: 6,
        title: "Independence Day",
        description: "Independence Day is celebrated with patriotic fervor. The event features flag hoisting, cultural performances, and speeches to commemorate the independence of the nation.",
        imgSrc: "assets/img/child.jpg"
    },
    {
        id: 7,
        title: "Republic Day Celebration",
        description: "Republic Day is celebrated with great enthusiasm. The event includes a parade, cultural performances, and a ceremony to honor the Constitution of the country.",
        imgSrc: "assets/img/child.jpg"
    },
    {
        id: 8,
        title: "Drawing Competition",
        description: "The Drawing Competition encourages students to express their creativity through art. Participants create artwork based on themes, and the best entries are awarded.",
        imgSrc: "assets/img/child.jpg"
    }
];

const eventModalsContainer = document.getElementById('eventModals');

events.forEach(event => {
    const modal = `
    <div class="modal fade" id="event${event.id}Modal" tabindex="-1" aria-labelledby="event${event.id}Label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="event${event.id}Label">${event.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${event.imgSrc}" alt="${event.title}">
                    <p>${event.description}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;
    
    eventModalsContainer.innerHTML += modal;
});
