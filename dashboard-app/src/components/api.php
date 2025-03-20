<?php
header("Content-Type: application/json");

$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';

switch ($endpoint) {
    case 'getBirthdays':
        $data = [
            ["name" => "John Doe", "avatar" => "avatar1.jpg"],
            ["name" => "Jane Smith", "avatar" => "avatar2.jpg"],
            ["name" => "Alice Johnson", "avatar" => "avatar3.jpg"],
            ["name" => "Bob Brown", "avatar" => "avatar4.jpg"],
            ["name" => "Eve Williams", "avatar" => "avatar5.jpg"],
            ["name" => "Charlie Davis", "avatar" => "avatar6.jpg"],
            ["name" => "Diana Miller", "avatar" => "avatar7.jpg"],
            ["name" => "George Wilson", "avatar" => "avatar8.jpg"],
            ["name" => "Helen Moore", "avatar" => "avatar9.jpg"],
            ["name" => "Ian Taylor", "avatar" => "avatar10.jpg"],
            ["name" => "Julia Anderson", "avatar" => "avatar11.jpg"],
            ["name" => "Kevin Thomas", "avatar" => "avatar12.jpg"],
            ["name" => "Linda Jackson", "avatar" => "avatar13.jpg"],
            ["name" => "Michael White", "avatar" => "avatar14.jpg"],
            ["name" => "Nancy Harris", "avatar" => "avatar15.jpg"],
            ["name" => "Oliver Martin", "avatar" => "avatar16.jpg"],
            ["name" => "Patricia Thompson", "avatar" => "avatar17.jpg"],
            ["name" => "Quinn Garcia", "avatar" => "avatar18.jpg"],
            ["name" => "Robert Martinez", "avatar" => "avatar19.jpg"],
            ["name" => "Samantha Robinson", "avatar" => "avatar20.jpg"],
            ["name" => "Thomas Clark", "avatar" => "avatar21.jpg"],
            ["name" => "Ursula Rodriguez", "avatar" => "avatar22.jpg"],
            ["name" => "Victor Lewis", "avatar" => "avatar23.jpg"],
            ["name" => "Wendy Lee", "avatar" => "avatar24.jpg"],
            ["name" => "Xavier Walker", "avatar" => "avatar25.jpg"],
            ["name" => "Yvonne Hall", "avatar" => "avatar26.jpg"],
            ["name" => "Zachary Allen", "avatar" => "avatar27.jpg"],
            ["name" => "Abigail Young", "avatar" => "avatar28.jpg"],
            ["name" => "Benjamin King", "avatar" => "avatar29.jpg"],
            ["name" => "Catherine Wright", "avatar" => "avatar30.jpg"],
            ["name" => "David Green", "avatar" => "avatar31.jpg"],
            ["name" => "Emily Baker", "avatar" => "avatar32.jpg"]
        ];
        break;
    case 'getWorkAnniversaries':
        $data = [
            ["name" => "Alice Johnson", "avatar" => "avatar3.jpg"],
            ["name" => "Bob Brown", "avatar" => "avatar4.jpg"],
            ["name" => "Eve Williams", "avatar" => "avatar5.jpg"],
            ["name" => "Charlie Davis", "avatar" => "avatar6.jpg"],
            ["name" => "Diana Miller", "avatar" => "avatar7.jpg"],
            ["name" => "George Wilson", "avatar" => "avatar8.jpg"],
            ["name" => "Helen Moore", "avatar" => "avatar9.jpg"],
            ["name" => "Ian Taylor", "avatar" => "avatar10.jpg"],
            ["name" => "Julia Anderson", "avatar" => "avatar11.jpg"],
            ["name" => "Kevin Thomas", "avatar" => "avatar12.jpg"],
            ["name" => "Linda Jackson", "avatar" => "avatar13.jpg"],
            ["name" => "Michael White", "avatar" => "avatar14.jpg"],
            ["name" => "Nancy Harris", "avatar" => "avatar15.jpg"],
            ["name" => "Oliver Martin", "avatar" => "avatar16.jpg"],
            ["name" => "Patricia Thompson", "avatar" => "avatar17.jpg"],
            ["name" => "Quinn Garcia", "avatar" => "avatar18.jpg"],
            ["name" => "Robert Martinez", "avatar" => "avatar19.jpg"],
            ["name" => "Samantha Robinson", "avatar" => "avatar20.jpg"],
            ["name" => "Thomas Clark", "avatar" => "avatar21.jpg"],
            ["name" => "Ursula Rodriguez", "avatar" => "avatar22.jpg"],
            ["name" => "Victor Lewis", "avatar" => "avatar23.jpg"],
            ["name" => "Wendy Lee", "avatar" => "avatar24.jpg"],
            ["name" => "Xavier Walker", "avatar" => "avatar25.jpg"],
            ["name" => "Yvonne Hall", "avatar" => "avatar26.jpg"],
            ["name" => "Zachary Allen", "avatar" => "avatar27.jpg"],
            ["name" => "Abigail Young", "avatar" => "avatar28.jpg"],
            ["name" => "Benjamin King", "avatar" => "avatar29.jpg"],
            ["name" => "Catherine Wright", "avatar" => "avatar30.jpg"],
            ["name" => "David Green", "avatar" => "avatar31.jpg"],
            ["name" => "Emily Baker", "avatar" => "avatar32.jpg"]
        ];
        break;
    case 'getCarouselItems':
        $data = [
            [
                "title" => "Innova R & R Awards",
                "image" => "carousel1.jpg",
                "actionText" => "View & Congratulate Them",
            ],
            [
                "title" => "Holi Celebrations",
                "image" => "carousel2.jpg",
                "actionText" => "",
            ],
        ];
        break;
    case 'getPosts':
        $data = [
            [
                "author" => "Aditya Sangi",
                "authorAvatar" => "avatar1.jpg",
                "location" => "GAR Infobahn, Kokapet",
                "image" => "post1.jpg",
                "content" => "Celebrating achievements!",
            ],
        ];
        break;
    case 'getComments':
        $data = [
            ["text" => "Comments sdhjvcujdn sjdncdnsc sdjcnjsd"],
            ["text" => "Comments sdhjvcujdn sjdncdnsc sdjcnjsd"],
        ];
        break;
    default:
        $data = ["error" => "Invalid endpoint"];
        break;
}

echo json_encode($data);
?>
