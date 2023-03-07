// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            src: "/client/client1.jpg",
            name: "Matthew Paul",
            text: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
        },
        {
            id: 2,
            src: "/client/client2.jpg",
            name: "Jason Mirnaz",
            text: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
        },
        {
            id: 3,
            src: "/client/client3.jpg",
            name: "Matthew Paul",
            text: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
        },
        {
            id: 4,
            src: "/client/client4.jpg",
            name: "Matthew Paul",
            text: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
        },
        {
            id: 5,
            src: "/client/client5.jpg",
            name: "Matthew Paul",
            text: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
        },
    ]);
}
