const genres = {
  12: "Phiêu lưu",
  14: "Tưởng tượng",
  16: "Hoạt hình",
  18: "Drama",
  27: "Kinh dị",
  28: "Hành động",
  35: "Hài kịch",
  36: "Lịch sử",
  37: "Miền tây",
  53: "Giật gân",
  80: "Tội phạm",
  99: "Tài liệu",
  878: "Khoa học viễn tưởng",
  9648: "Bí ẩn",
  10402: "Nhạc",
  10749: "Lãng mạn",
  10751: "Gia đình",
  10752: "Chiến tranh",
  10770: "Truyền hình",
};
export const moviesData = [
  {
    id: "0",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/apFcKjQlxzFj2MY9d0rxdyT0ykv.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/w7GbwfXVirUeKSYgsKr6cP1Tk10.jpg",
    title: "Đất Rừng Phương Nam",
    language: "Tiếng việt",
    genre: [10752, 10751, 18].map((genre) => genres[genre]),
    rating: 7.6,
    description:
      "Đất Rừng Phương Nam phiên bản điện ảnh được kế thừa và phát triển từ tiểu thuyết cùng tên của nhà văn Đoàn Giỏi. Bộ phim kể về hành trình phiêu lưu của An - một cậu bé chẳng may mất mẹ trên đường đi tìm cha. Cùng với An, khán giả sẽ trải nghiệm sự trù phú của thiên nhiên và nét đẹp văn hoá đặc sắc của vùng đất Nam Kì Lục Tỉnh, sự hào hiệp của những người nông dân bám đất bám rừng và tinh thần yêu nước kháng Pháp đầu thế kỉ 20.",
    releaseDate: "10/10/2023",
    trailer: "hktzirCnJmQ",
    status: "Showing",
    ageRequired: "16+",
    time: "1hr50min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "Nguyễn Quang Dũng",
    actor:
      "Hồng Ánh, Huỳnh Hạo Khang, Mai Tài Phến, Công Ninh, Hứa Vĩ Văn, Tuyền Mập, Tuấn Trần.",
  },
  {
    id: "1",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yTixpj3zakA1XFUq5PxR836HXO.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/4nfmB5in5jZP1VwbXIb5akxzVKc.jpg",
    title: "Vầng Trăng Máu",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    genre: [53, 18].map((genre) => genres[genre]),
    rating: 8,
    description:
      "Vào những năm 1920, các thành viên của khu tự trị Osage ở Mỹ bị ám sát một cách bí ẩn, làm dấy lên một cuộc điều tra lớn của FBI",
    releaseDate: "20/10/2023",
    trailer: "c_iA5FnHzJc",
    status: "Showing",
    ageRequired: "16+",
    time: "3hr26min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "Martin Scorsese",
    actor: "Leonardo DiCaprio, Robert De Niro, Lily Gladstone",
  },
  {
    id: "2",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k02jaXoCVXSJRYYEzwH7jbdVzEJ.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/dp0rdbGSbZTyWumnbWspXQp87hA.jpg",
    title: "Phong Ấn Quỷ Dữ",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    genre: [27].map((genre) => genres[genre]),
    rating: 7.4,
    description:
      "Sam, một thiếu niên người Mỹ gốc Ấn, đang cố gắng hòa nhập vào môi trường học tập với người sự các khác biệt văn hóa. Khi một con quỷ khát máu trong thần thoại đeo bám người bạn thân thiết của cô, Sam buộc phải đối mặt để đánh bại nó",
    releaseDate: "20/10/2023",
    trailer: "XrfEyQhqtb0",
    status: "Showing",
    ageRequired: "16+",
    time: "1hr38min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "Bishal Dutta",
    actor: "Megan Suri, Neeru Bajwa, Mohana Krishnan, Betty Gabriel",
  },
  {
    id: "3",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/atk4VEohSY2HdWliRoWElpFnSkR.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/1ExfW9AM51bCM62sdDEN22mIj0I.jpg",
    title: "Quỷ Ám (Tín đồ)",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    genre: [27].map((genre) => genres[genre]),
    rating: 8.2,
    description:
      "Phần tiếp theo của bộ phim năm 1973 kể về một cô bé 12 tuổi bị một thực thể ma quỷ bí ẩn chiếm hữu, buộc mẹ cô phải tìm đến sự giúp đỡ của hai linh mục để cứu cô",
    releaseDate: "06/10/2023",
    trailer: "_JHmfnvCUSk",
    status: "Showing",
    ageRequired: "16+",
    time: "1hr38min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "David Gordon Green",
    actor: "Jennifer Nettles, Ellen Burstyn, Leslie Odom Jr",
  },
  {
    id: "4",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2tkotVho0wS2uszaxEt5yB2zAv9.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/rNOjlTMYZWDjju5r22GpLJJMBKj.jpg",
    title: "Thanh Gươm Trừ Tà",
    language: "Tiếng Hàn - Phụ đề Tiếng Việt",
    genre: [35, 27].map((genre) => genres[genre]),
    rating: 9.6,
    description: `Chuyện phim xoay quanh nhân vật trừ tà Cheon (Gang Dong Won thủ vai), cùng với chiến hữu của mình In Bae(Lee Dong Hwi thủ vai), chuyên đi lừa đảo với những màn trừ ta "pha ke" sử dụng công nghệ cao cùng khả năng hùng biện và tài "thao túng tâm lý" đỉnh cao. Tuy chuyên đi trừ tà nhưng cả hai đều không thể nhìn thấy và không tin vào ma quỷ cho tới khi họ phải đổi đầu với một con ác quỷ thật đang khống chế em gái (Park So Yin thủ vai) của Yoo Kyung (Esom thủ vai). Yoo Kyung sở hữu "đôi mắt âm dương" có thể nhìn thấy những linh hồn. Kết hợp với thầy trừ tà Cheon và In Bae, họ phải đối đầu với một con ác quỷ thật sự - Beom Cheom (Huh Joon Ho thủ vai) và từ đó, thầy trừ tà Cheon vô tình khám phá được bí mật đăng sau cái chết của em trai và ông nội mình. Nhận được sự giúp đỡ của một nhân vật bí ẩn cùng với những pha hành động trừ tà đẹp mắt, liệu thầy trừ ta Cheon có giúp được em gái của Yoo Kyung và diệt trừ ác quỷ đó?`,
    releaseDate: "6/10/2023",
    trailer: "V6Km0awtvEY",
    status: "Showing",
    ageRequired: "16+",
    time: "1hr38min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "Kim Sung-Sik",
    actor:
      "Gang Dong Won, Esom, Lee Dong Hwi, Kim Jong Soo, Lee Jung Eun, Park Myoung Hyun, Park So Yi, … .",
  },
  {
    id: "5",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a5EreVlyB9fXzZ2Rf9ugOLrW5YI.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/fn0bRHELeylB452pL2Mlo76YEzI.jpg",
    title: "Những Kỷ Nguyên Của Taylor Swift",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    genre: [10402].map((genre) => genres[genre]),
    rating: 8,
    description:
      "Hiện tượng văn hóa tiếp tục trên màn ảnh lớn! Đắm chìm trong trải nghiệm xem phim hòa nhạc độc nhất vô nhị với góc nhìn ngoạn mục, đậm chất điện ảnh về chuyến lưu diễn mang tính lịch sử. Khuyến kích khán giả đeo vòng tay tình bạn và mặc trang phục Taylor Swift Eras Tour",
    releaseDate: "03/11/2023",
    trailer: "cwLAor_smGw",
    status: "Upcoming",
    ageRequired: "16+",
    time: "2hr48min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "Sam Wrench",
    actor: "Taylor Swift",
  },
  {
    id: "6",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qgotFL0XUevylN2enbc3SeT7x2m.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/jB48R2vubdLDXmDAbxM1yD9hNCk.jpg",
    title: "The Marvels",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    genre: [28, 12, 878].map((genre) => genres[genre]),
    rating: 7.7,
    description: "Phần tiếp theo của Captain Marvel (2019)",
    releaseDate: "10/11/2023",
    trailer: "Q111qAilU7A",
    status: "Upcoming",
    ageRequired: "16+",
    time: "1hr45min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "Nia DaCosta",
    actor: "Brie Larson, Samuel L. Jackson, Zawe Ashton",
  },
  {
    id: "7",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k06DSB9gny7AhnWz8uzVcakw73n.jpg",
    backdrop:
      "https://www.themoviedb.org/t/p/original/igwshQHV36aBkPyWp7En5P4Kn2V.jpg",
    title: "Lễ Tạ Ơn Kinh Hoàng",
    language: "Tiếng Anh - Phụ đề Tiếng Việt",
    genre: [27, 53].map((genre) => genres[genre]),
    rating: 0,
    description: "",
    releaseDate: "17/11/2023",
    trailer: "7bJiqbnFHSo",
    status: "Upcoming",
    ageRequired: "16+",
    time: "1hr47min",
    censorship: "Dành cho người từ đủ 16 tuổi trở lên (16+)",
    director: "Eli Roth",
    actor:
      "Patrick Dempsey, Addison Rae, Milo Manheim, Jalen Brooks Thomas, Nell Verlaque, Rick Hoffman, And Gina Gerson",
  },
];