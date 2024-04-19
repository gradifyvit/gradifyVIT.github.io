const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["good","great"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    [""],
  
    ["How do I navigate through the website?","Can you guide me on using the website?",
    "How do I find my way around the site?",
    "What's the best way to navigate this website?",
    "I'm a bit lost on the site. Can you help me navigate?",
    "Could you explain how to move through the website?","navigation"],
  
    ["Is an account required?","Do I need to create an account to use this website?",
    "Is registration mandatory to access all features?",
    "Can I use the website without signing up?",
    "Is an account necessary for using the services?",
    "Do I have to create an account to get started?","account"],
  
    ["I'm experiencing technical issues with the website. How can I get help?","Who do I contact for technical assistance?",
    "I'm having trouble with the website. How can I get support?",
    "How do I report technical issues with the site?",
    "What should I do if I encounter technical difficulties?",
    "Can you help me resolve technical problems I'm facing?","help"],
  
    ["I have a suggestion for a new feature. How can I submit it?",
    "Where can I submit ideas for new features?",
    "How do I share my suggestions for improving the website?",
    "Is there a way to propose new features?",
    "How can I contribute ideas for website enhancements?",
    "Do you accept feature requests? If so, how can I submit mine?",
  "suggestion","feedback"],
  
    ["How can I analyze my grades?","What is grade analyzer?","What is grade analyser?","How to use grade analyser?","How to use grade analyzer?","Can you show me how to analyze my grades?",
    "How do I use the Grade Analyzer feature?",
    "Could you explain how the grade analysis works?",
    "I'm not sure how to analyze my grades. Can you help?",
    "What steps do I take to analyze my grades?","grade analyser","grade analyzer"],
  
    ["How do I calculate my attendance?","How can I calculate my attendance?",
    "Can you help me with the attendance calculation?",
    "What's the process for using the Attendance Calculator?",
    "I need assistance with calculating my attendance. Where do I start?",
    "Could you guide me through using the attendance calculation tool?","attendace","attendance calculator"],
  
    ["How can I set a goal GPA?","How do I set a target GPA?",
    "What's the procedure for setting a goal GPA?",
    "Can you assist me in setting up a goal GPA?",
    "I want to set a GPA goal. What should I do?",
    "How can I specify my target GPA using the website?","goal gpa","target gpa"],
  
    ["How do I calculate my GPA?","How do I calculate my GPA?",
    "Could you explain how the GPA calculator works?",
    "What do I need to do to use the GPA calculator?",
    "Can you guide me through the process of calculating my GPA?",
    "I'm unsure how to use the GPA calculator. Can you provide instructions?","calculate gpa","gpa calculator"],
  
    ["Can I predict my future grades?","Is there a way to predict my future grades?",
    "How can I forecast my grades for upcoming semesters?",
    "Can you help me with predicting my grades?",
    "What's the method for using the grade prediction tool?",
    "I'm interested in knowing my future grades. How can I do that?","grade predictor"],
  
    ["How can I quickly check my CGPA?","How do I quickly check my CGPA?",
    "Is there a fast way to view my CGPA?",
    "Can you show me how to access my Cumulative GPA quickly?",
    "I need to know my CGPA urgently. What should I do?",
    "Is there a shortcut to view my overall GPA?","cgpa calculator"],
  ]
  
  const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Fine, how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    ["Glad to hear"],
    ["Yeah"],
    ["Bye!", "Goodbye!", "See you later!"],
    ["Please enter something"],
    ["You can navigate through the website using the navigation menu. Simply click on the desired feature or section to access it."],
    ["No account is needed to use the features"],
    ["For technical support, please contact us through the 'Contact Us' page."],
    ["We welcome your feedback and feature suggestions! Please submit your ideas through the 'Feedback' or 'Contact Us' form, and our team will review them."],
    ["You can analyze your grades using our Grade Analyzer feature. Simply input your number of semesters and GPA per semester. It will provide you with insights and statistics."],
    ["Our Attendance Calculator feature allows you to input your attendance data for each course, and it will calculate your overall attendance percentage."],
    ["With our Goal GPA feature, you can specify your target GPA for the semester or academic year. It will help you track your progress towards achieving your academic goals."],
    ["You can calculate your GPA using our GPA Calculator feature. Input your grades and credit hours for each course, and it will compute your GPA automatically."],
    ["Yes, our Grade Predictor feature uses your current grades and performance to forecast your future grades based on various scenarios and factors."],
    ["Our Quick CGPA feature allows you to instantly view your Cumulative Grade Point Average (CGPA) by entering your previous grades and credit hours."]
  ]
  
  const alternative = [
    "Try again",
    "I'm sorry, I didn't catch that",
    "For any queries, you can contact us through 'Contact Us' page"
  ]