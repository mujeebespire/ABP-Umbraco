
        // Tab Switching
        document.querySelectorAll('.email-management .tab-button').forEach(button => {
            button.addEventListener('click', function () {
                const targetTab = this.getAttribute('data-tab');

                // Remove active class from all buttons and contents
                document.querySelectorAll('.email-management .tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelectorAll('.email-management .tab-content').forEach(content => {
                    content.classList.remove('active');
                });

                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // View All / View My Email Only toggle
        const viewAllBtn = document.getElementById('viewAllBtn');
        const viewMyEmailBtn = document.getElementById('viewMyEmailBtn');

        viewAllBtn.addEventListener('click', function () {
            viewAllBtn.classList.add('active');
            viewMyEmailBtn.classList.remove('active');
            console.log('Viewing all emails');
        });

        viewMyEmailBtn.addEventListener('click', function () {
            viewMyEmailBtn.classList.add('active');
            viewAllBtn.classList.remove('active');
            console.log('Viewing my emails only');
        });

        // Modal Functions
        function openModal(modalId) {
            document.getElementById(modalId).classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Close modal when clicking outside
        document.querySelectorAll('.email-management .modal').forEach(modal => {
            modal.addEventListener('click', function (e) {
                if (e.target === this) {
                    closeModal(this.id);
                }
            });
        });

        // Form Submissions
        document.getElementById('composeForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const to = document.getElementById('emailTo').value;
            const subject = document.getElementById('emailSubject').value;
            const content = document.getElementById('emailContent').innerHTML;

            console.log('Sending email to:', to);
            console.log('Subject:', subject);
            console.log('Content:', content);

            alert('Email sent successfully!');
            this.reset();
            document.getElementById('emailContent').innerHTML = 'Compose your email here...';
        });

        // Clear button for compose form
        document.querySelector('.email-management #composeForm button[type="reset"]').addEventListener('click', function () {
            setTimeout(() => {
                document.getElementById('emailContent').innerHTML = 'Compose your email here...';
            }, 0);
        });

        // Add Subscriber Form
        document.getElementById('addSubscriberBtn').addEventListener('click', function () {
            const email = document.getElementById('subscriberEmail').value;
            const newsletter = document.getElementById('subNewsletter').checked;
            const updates = document.getElementById('subUpdates').checked;
            const promotions = document.getElementById('subPromotions').checked;

            if (email) {
                let subscribeTo = [];
                if (newsletter) subscribeTo.push('Newsletter');
                if (updates) subscribeTo.push('Updates');
                if (promotions) subscribeTo.push('Promotions');

                console.log('Adding subscriber:', email, 'to:', subscribeTo.join(', '));
                alert('Subscriber added successfully!');

                document.getElementById('addSubscriberForm').reset();
                closeModal('addSubscriberModal');
            } else {
                alert('Please enter an email address');
            }
        });

        // Add Mailing List Form
        document.getElementById('createListBtn').addEventListener('click', function () {
            const listName = document.getElementById('listName').value;
            const listDescription = document.getElementById('listDescription').value;

            if (listName) {
                console.log('Creating mailing list:', listName);
                console.log('Description:', listDescription);
                alert('Mailing list created successfully!');

                document.getElementById('addListForm').reset();
                closeModal('addListModal');
            } else {
                alert('Please enter a mailing list name');
            }
        });
