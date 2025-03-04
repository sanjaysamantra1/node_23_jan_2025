const TicketManager = require('./ticket_manager')
const EmailService = require('./email_service')

const ticketManager = new TicketManager(2);
const emailService = new EmailService();

ticketManager.on('buyTicket', (email, price, time) => {
    console.log(`${email} bought a ticket for ${price} at ${time}`);
    emailService.sendMail(email);
})
ticketManager.on('noTicketAvailable', (error) => {
    console.log(error)
})

ticketManager.buy('ajay@gmail.com', 300)
ticketManager.buy('adarsh@gmail.com', 150)
ticketManager.buy('pavan@gmail.com', 200)