document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    const hospitalSelect = document.getElementById('hospital');
    const vaccineSelect = document.getElementById('vaccine');
    const doseNumberSelect = document.getElementById('dose-number');
    const appointmentSlotSelect = document.getElementById('appointment-slot');

    // Dummy data for hospitals and slots (replace with actual API calls)
    const hospitals = [
        { id: 1, name: 'City Hospital' },
        { id: 2, name: 'Evercare Hospital Dhaka, Bashundhara' },
        { id: 3, name: 'Birdem General Hospital & Ibrahim Medical College,' },
        { id: 4, name: 'County Health Center' },
        { id: 3, name: 'County Health Center' },
        { id: 3, name: 'County Health Center' },
        { id: 3, name: 'County Health Center' },
        { id: 3, name: 'County Health Center' },


        
    ];

    const slots = {
        1: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
        2: ['9:00 AM', '12:00 PM', '1:00 PM', '4:00 PM'],
        3: ['8:00 AM', '10:30 AM', '1:30 PM', '5:00 PM'],
    };

    // Populate hospital options
    hospitals.forEach(hospital => {
        const option = document.createElement('option');
        option.value = hospital.id;
        option.textContent = hospital.name;
        hospitalSelect.appendChild(option);
    });

    // Populate appointment slots based on selected hospital
    hospitalSelect.addEventListener('change', (event) => {
        const hospitalId = event.target.value;
        appointmentSlotSelect.innerHTML = ''; // Clear previous options

        if (slots[hospitalId]) {
            slots[hospitalId].forEach(slot => {
                const option = document.createElement('option');
                option.value = slot;
                option.textContent = slot;
                appointmentSlotSelect.appendChild(option);
            });
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Collect form data
        const formData = new FormData(form);

        // Display form data (for demonstration purposes)
        console.log('Patient Name:', formData.get('patientName'));
        console.log('Address:', formData.get('address'));
        console.log('Contact:', formData.get('contact'));
        console.log('Hospital:', formData.get('hospital'));
        console.log('Vaccine:', formData.get('vaccine'));
        console.log('Dose Number:', formData.get('doseNumber'));
        console.log('Appointment Slot:', formData.get('appointmentSlot'));

        // Submit the form data to the server (placeholder)
        alert('Appointment submitted successfully!');
    });
});
