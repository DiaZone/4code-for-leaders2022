const defaultRoutes = {
    'VDNKHoRossii': ["57", "2002", "34", "53"],
    'Moskvoved-2-0':["5","461","1000","5012","26"],
    'Nauchitsya-novomu':["63","47","8004"],
    'Veselo-s-detmi':["9","7","4005"],
    'Dlya-vlublennih':["4006","4007","23","5013"],
    'Innovacii':["2","461","63"],
    'Knigomanam':["58","516","4008"],
};

const points = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": "66",
        "properties": {
            "text": "Павильон №66. Выставочно-культурный и экспозиционный центр Республики Узбекистан",
            "color": "#0000ff",
            "imageSrc": "https://modamix.net/wp-content/uploads/2018/11/36582841_2512685672090743_4876433244276391936_o.jpg",
            "check": "false",
            "obj_type": 0,
            "icon": 'Павильоны'
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                37.63190639,
                55.83163773
            ]
        }

    }, /* Достопримечательности*/
        {
            "type": "Feature",
            "id": "2001",
            "properties": {
                "text": "Самолет Як-42",
                "color": "black",
                "imageSrc": "data:image/jpeg;base64,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",
                "check": "true",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62310408232467,
                    55.83379895342486
                ]
            }
        },


        {
            "type": "Feature",
            "id": "2002",
            "properties": {
                "text": "Макет ракеты-носителя «Восток»",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/3e5/1000_1000_1/3e5c29ab7772c1b9383249cce31beb83.jpg",
                "check": "false",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.622957,
                    55.8343371
                ]
            }
        },

        {
            "type": "Feature",
            "id": "2003",
            "properties": {
                "text": "14 фонтанов Центральной аллеи",
                "color": "black",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/b2a/1000_424_1/b2a7b18e620a3d49e4b79dda83300c35.JPG ",
                "check": "false",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63616554376004,55.82721137506381
                ]
            }
        }, {
            "type": "Feature",
            "id": "2004",
            "properties": {
                "text": "Фонтан «Мальчик с рыбой»",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/c83/1000_424_1/c8375519cf0b0afe5f57b0a1bbbb5afc.jpg",
                "check": "false",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62961760967341,55.8331138631313
                ]
            }
        }, {
            "type": "Feature",
            "id": "2005",
            "properties": {
                "text": "Сухой фонтан у «Москвариума»",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/731/1000_424_1/731f6d6c520128cfd3ac148e52b0d017.JPG",
                "check": "false",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62022800963179,55.83322927100738
                ]
            }
        }, {
            "type": "Feature",
            "id": "2006",
            "properties": {
                "text": "Сухой фонтан у павильона №31",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/b1b/1000_424_1/b1bb0b4aafaba70e7dd2b3fcbb262e08.jpg",
                "check": "false",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6202949124664,55.8347923107817
                ]
            }
        }, {
            "type": "Feature",
            "id": "2007",
            "properties": {
                "text": "Фонтан «Золотой колос»",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/iblock/6a4/6a43cd2ca8295f5079dc8fcd25a7bde6.jpg",
                "check": "false",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.616311482612964,55.83854642686305
                ]
            }
        },
        {
            "type": "Feature",
            "id": "2008",
            "properties": {
                "text": "Фонтан дружбы народов",
                "color": "#0000ff",
                "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3L6I7Kpvgbuie14z_xSwQtjH0Q5A_6vOT9g&usqp=CAU",
                "check": "false",
                "obj_type": 2,
                "icon": 'Достопримечательности'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.631815,
                    55.8298
                ]
            }
        },
        /* Музеи */


        {
            "type": "Feature",
            "id": "1",
            "properties": {
                "text": "Павильон №1. Экспозиция Третьяковской галереи",
                "color": "#0000ff",
                /*  Синий */
                "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStB5CRLie-KmdX7ZMSLRyvqG4HfJPuZuw8Dw&usqp=CAU",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63396555806717, 55.82862329438648
                ]
            }
        },


        {
            "type": "Feature",
            "id": "4",
            "properties": {
                "text": "Павильон №4. Выставочно-торговый центр Киргизской Республики",
                "color": "#0000ff",
                /*  Синий */
                "imageSrc": "data:image/jpeg;base64,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",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63062656899598, 55.828676919676084
                ]
            }
        },
        {
            "type": "Feature",
            "id": "47",
            "properties": {
                "text": "Павильон №47. Павильон №47. Дом ремесел",
                "color": "#0000ff",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/459/1000_424_1/459c04cf0dbf24ff674635fb635f031c.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.624041221723466,55.837134350956354
                ]
            }
        },
        {
            "type": "Feature",
            "id": "6",
            "properties": {
                "text": "Павильон №6. Выставочно-торговый центр Республики Абхазия",
                "color": "#0000ff",
                "imageSrc": "data:image/jpeg;base64,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",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62960450592756, 55.829124116232
                ]
            }
        },


        {
            "type": "Feature",
            "id": "10",
            "properties": {
                "text": "Павильон №10. Выставочно-торговый центр Республики Молдова",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/bef/1000_424_1/befe12455957cc5cb3ff9c367db9bc3f.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62941847448727, 55.82970105936483
                ]
            }
        },


        {
            "type": "Feature",
            "id": "8",
            "properties": {
                "text": "Павильон №8. Юные натуралисты",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/41b/1000_424_1/41b544d5850f242dbeb71b3518cbe235.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62737701358201, 55.82888238203161
                ]
            }
        },

        {
            "type": "Feature",
            "id": "9",
            "properties": {
                "text": "Павильон №9.Торф",
                "color": "#0000ff",
                "imageSrc": "http://photos.wikimapia.org/p/00/02/66/40/72_big.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.628077407440934, 55.82912057934874
                ]
            }
        },

        {
            "type": "Feature",
            "id": "11",
            "properties": {
                "text": "Павильон №11. Выставочно-торговый центр Республики Казахстан",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/fc6/1000_424_1/fc63d7c441ef3ea69b2188659308c4ba.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62895129336119, 55.82987125227794
                ]
            }
        },

        {
            "type": "Feature",
            "id": "57",
            "properties": {
                "text": "Павильон №57. «Россия — моя история»",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/6ba/1000_424_1/6ba2ab45145d54b2935668d6421792e8.JPG",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.626546142046706, 55.833989850893445
                ]
            }
        },


        {
            "type": "Feature",
            "id": "12",
            "properties": {
                "text": "Павильон №12",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/b03/1000_424_1/b0376ed8d632cad49ee126d7c445d59e.JPG",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62848864787105, 55.830455900962754
                ]
            }
        },

        {
            "type": "Feature",
            "id": "515",
            "properties": {
                "text": "Павильон №515",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/30a/1000_424_1/30a53e9cde554d5e8ed99111d0bdf2ed.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'

            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62703248138078, 55.830251209230255
                ]
            }
        },


        {
            "type": "Feature",
            "id": "14",
            "properties": {
                "text": "Павильон №14. Выставочно-торговый центр Азербайджанской Республики",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/235/1000_424_1/2354a11aaa4f768b3941e04f35e1d941.JPG",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.627424083884826, 55.83116410939595
                ]
            }
        },

        {
            "type": "Feature",
            "id": "15",
            "properties": {
                "text": "Павильон №15. Музей Олимпийского движения России",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/e6e/1000_424_1/e6ea66575036ab91957daf6329b9ce5c.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62680181139354, 55.83151962248276
                ]
            }
        },

        {
            "type": "Feature",
            "id": "9001",
            "properties": {
                "text": "Спортивный магазин Fitness Place",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/c63/1000_424_1/c63b6c7d5547413e9f990588c67d017a.jpg",
                "check": "false",
                "obj_type": 9,
                "icon": 'Магазины'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.625093025795934, 55.83114461381065
                ]
            }
        },

        {
            "type": "Feature",
            "id": "16",
            "properties": {
                "text": "Павильон 16. Гидтрометеорология",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/dd5/1000_424_1/dd585506a6dae8d62c28ad51e43ba9d2.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62283695876121, 55.83056771867281
                ]
            }
        },


        {
            "type": "Feature",
            "id": "516",
            "properties": {
                "text": "Павильон «Книги» РОСИЗО",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/7c1/1000_424_1/7c1ebe83041ec13ab45944cfa01f5022.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61990034613595, 55.830073162532805
                ]
            }
        },


        {
            "type": "Feature",
            "id": "18",
            "properties": {
                "text": "Павильон №18. Выставочно-торговый центр Республики Беларусь",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/0bb/1000_424_1/0bbf9f2f1dc246fea627457a9d740890.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.625727277421014, 55.832049911817215
                ]
            }
        },

        {
            "type": "Feature",
            "id": "19",
            "properties": {
                "text": "Павильон №19. «Атом»",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/673/1000_424_1/6734d324f95f6a12a9ec36de00492a69.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.625365528774765, 55.83240004653819
                ]
            }
        },

        {
            "type": "Feature",
            "id": "20",
            "properties": {
                "text": "Павильон №20. Центральный дом автоспорта",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/9e3/1000_424_1/9e354cd5cdc7cc8e2f612f2b80de091a.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62267165586243, 55.833108951641435
                ]
            }
        },


        {
            "type": "Feature",
            "id": "21",
            "properties": {
                "text": "Павильон №21",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/e62/1000_424_1/e62b87c225d6f8bdc8289f95ef45b04e.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.620478073611444, 55.832486499082535
                ]
            }
        },


        {
            "type": "Feature",
            "id": "33",
            "properties": {
                "text": "Павильон №33",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/d69/1000_424_1/d69aab19fee22fc3fc9283c1a1da50c2.jpg",
                "check": "true",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.622054746049514, 55.83559114014644
                ]
            }
        },


        {
            "type": "Feature",
            "id": "29",
            "properties": {
                "text": "Павильон №29. Эколого-просветительский центр «Цветоводство»",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/a39/1000_424_1/a39f235c36f3baed001b3b123353e734.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61822486524888, 55.83565093730034
                ]
            }
        },

        {
            "type": "Feature",
            "id": "30",
            "properties": {
                "text": "Павильон №30.Музей микробиологии",
                "color": "#0000ff",
                "imageSrc": "data:image/jpeg;base64,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",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.619741314353504, 55.83507719217716
                ]
            }
        },

        {
            "type": "Feature",
            "id": "26",
            "properties": {
                "text": "Павильон №26.Транспорт",
                "color": "#0000ff",
                "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgYFBgYGBoaGBgaGRgYGRwcGRgZGhkcIS4lHB4rIRgYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJCs2NDQ0NDQ0NDE0NDY/NDQ0NDY0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEUQAAIBAgQDBQUFBgQEBgMAAAECEQAhAwQSMSJBUQUTYXGBBjKRobFCcsHR8AcUI1KCkmLC4fEkM3OyU5Sio7PSNEOT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACsRAAICAQMDAwQCAwEAAAAAAAABAhEDEiExBEFRE2FxBRQikYGhMlJiFf/aAAwDAQACEQMRAD8A9ipEU9PQAKKQFFimigBgKUVKKeKABkVE1JqGxoAnTaaHqqQemIIBTEUlakxpDIk0wamIpwKYhU8UgKUUhiC06ilUhQAopiKkKeKABlaiy0YiolaAAAU4ohWmK07FREmmVqJppBYoAamIp4pRQA61ImoTTg0ASUVKoqaS4gMwQYMGDsennSGI09ImmigB6VKKVADzTFqiKUUAPrpw1R004WgCc0xakBSIoAGzU0TRCtQZaYhu7pd3UwabVSGNFIVOhk0AOVpBadTUxQAFnAIBIkzA5mN4p6xu0cwe9kG6e76b/iK2kMgHqAaAEBT6acU80AMKkKaaegB6aaixqDTQAQmoE0KTT3p0KwmqmLVHTS00ASmm1VGKkFoAVNNOVpjQBVz2b0jSNz05Dr50Psp7MOhn4/7VSxJZmabGdrz0vRuzAVLXMFRzm4Pj50xWbINPNU2xqicU0UFl7UKes/WaVPSGotCpg0AtTd5SoLLIepzVZXogxKVDsLqp6GHFODSGOag1TqLGgCJFQNFBpaaYgcmlBommlFFhREVNaFmn0oWEWjfbcUP98TRrExMDkSegpDMXMNLM3IszfMx67VvZJpRT4R8LVzwS/htE/h+tq1uy8zbQRtsevpypiRbzGNo02EFoMmIHXxo1ZHazcYkgjSOHYzJmD42+FaeCpCqDuFAPoKQyYqVRmkGoAeKU0poZNAEzUTTTUHxVALE2G/Pa1AE6U0NsUBgvMgkelAbOKGZWZV0xuwEz50CLWqkcSslu0RoMk6rxY+l4jbxoGY7UBUAC4IJki5H3dXOi0FM2GxOVCXHBbRcGJvF/KsfEzrswYCIFoU8/En8KC+I7MDrII5hlmOkKPGduVFrsGktsNJ0/4oEKSLnw2HiYFHyrcekkSQbTe19udUDgTvrbwMkfByB8qWINGl9NkcNyNtnEAfyl+tO6CkzcVAbgg3Ite4sR8RU+4o6AAWiPDanp2xaUA7mlRqVFsKQDXTwKq3pajRQrLYUVPTVRWNGTFoaGmF01IUkxBUppDGBpNUpqMUhjRUg1NppiKAJaqYvUStNpoAB2k3BEAgkAz03+oFZggYQW1nY+PgY53FXe0GtoPg0kkeUHbkaopgAwZJt/Mb/C1AiqXlS3Ew0zsADAmQ1vjVjK4+llYXOnnJkRBvtNxVhMIABYsBEeG1J8MwY3i1OgsJ2jxssSCv5SPrWlqgXPK5P1NYSYb9YHO4W/9I/GgtjYql11MQZENddgAQxMg25WubUm6GkdEXExzifT9GhHMiA3IsFHxj8DWLrxmIMwdMenmoH1qIyTEXNh1gj0JJIpX7Dr3Nhu0EDFSywFBsZJPMQPSqeJ2qNK76tQ1bLYG44iPCq6ZEHck/e1H4TFETJqDYW62+Vvxo3FsRPahLllWeGI4jF5mIHjzqu2ZxCpTYEz9lTvOx1H4VffBAFgf+4/OiIlto8KKfkNS8GWyYjXJJ/uPyaFqaZJuseRC/JRWnpqGJiKvvMB5/lTpBqZTXIDw+Bn5n8KKuVA6/T6RTP2hhjmT5A/jFV37YQbCfMj8JouKCpMuDBXeBPXn8acrVTIdo945UACFLc+RA5+dXytNNPglprkFFDxk1KREnceJHL1uPWrBFQpsEWey8XVhqJ93g/t90+qlT61brL7ObRilDs4keYkx6gt/ZWxpqUUwdKiaaanYiqoNSii6aUUWKgRw6bu6PFPFFjozXxCuKByKgfM3q5NZeczia51A6SBAkmx3gevwp8TtWZCoxkNBsBvwncnbwotBTNRTU9cb1iHP4hPCqjikAktyiIEHxoenFIuxAgAiALA2vY/OlY6Oh70bf4tPrE/SqmJ2mgsWUHSxjUNUgwBpF73rIOS1CXJYEzxEn14pijpkVAA5cv1t8qNw2D43bCwdIYnSNliGO/vRtVfG7Uc6tKQGAAJYgpa5gCJ8mowyyjl67fSKL3QBBiPIfUxRTC0VhlZuxk+n1MmjqgECfLximfEQNdlmw3E/Cahnc0mHGsxPgTYeOwp7IVNhjb9bUmHQVl43buHyUtHWI+U1b7NzvfKx0wAY38JpKSY3FotBetOqDpXN53tbGVtMgeQA/CqT9oYje85+J/E1LmilBnX4wESwkC5mI8zNqC+ewwLuPSW+goOSIGXCOQGKsCCQDdiRbyIrmMxlyGYEbEx0I3kHYjxFDk0rCMbZ0b9tYY5knwAA+ZmreTxhiJrWR70CTFrVwhzJFlwnbfYqBbzIrruycaMJdABUg3JvqniBA2gzUxk2xyiktijmO23DEaVBHQfSZoD9pYrfaI9Y+kUu0sJdbECDpuJmTHL8q4vNdrIjsrNmNSsQVVVUb2MtBI6EGCL1MpNcsf4pWd32NiM2MNRnhafC3M1c7eTUoKX03aDsOc1xnsb2qr5g4IRwjoznW+rjSI4bxbVzrtc5gALYCbbVUXqiTau0c8E8KIMM1cGDSYKN6nSXYXsngJZRLxEEwoUwZ6zatbAx3Y8SgCORP661n9mQXMX4T+G/wA61cEb+laxWxnJ7kyKFiPETzMUYig4o2+8KskDmyV0uokowNtzfb1uv9RraGJIBBkESD1B2NZbLII62/1qz2Vq7sAj3SyjyBgAeXu/00u4dizelU6VMCRPhTVhjtt7DQLgk3i4MER/rR37VgEnaFgRcsxIj4j61KaatDaadM1aQNUMDtFWMXmB8+VXxFMRlYuWXU3ix6deoE0/dqN4Hn/rR8UgaidgTyJ59BWF2qqsSym5jqD05ik3SBK2a6YiE6QwJ8DNVcbtVFJHFItt+dZXY3C5aNTQQJMDlMmDU8/h6n90g87yL+gqNTasvSk6NTIZ5cVigWyib87xtHjWbnO1sRWjSvgb/jNP2WrK5UHTqQmbTwkWuPH5Vxn7Rs6VxcPDllATW+IusFVZ1QjThkBoAdoIO3nRbaCkmdt2PnsR8WHbhCkmwA8L1T9oX0HWzEKzG9yPACpZDD/ipcaWBER73CWH0rB/aLmXRsFEJUNrZwLagmiFJ5DiN6luo2wbUXZdwfeQsbFlMknaxroe23VkZjwaVN3gKOckg2HpXK9rurZPvNLEPgAqusqf4igAauR4hetz23vksQxOpUFujOoPpBJ8qFtFg33MTKuHwxiAreY0sGFmK2I32+tavsl2kMVcVEfiw3hyFIudQHvjloYWtas72YdnyqlzqKsyA/4VPCPQED0qH7OS7PmHf3nTBc8pnXH1ipT3XuEpWkXM/jhs33WniTADsZAB1khV0faI0kzFtQk3FYntO7YYVgiNqaIcnwvptItfpVrN4ZbtcQRwp43BwyIFr3efSl7XZQEq7W0K88wFI1OSOdkiB1oe9gm6o6D2TzDYuUw3fTr4wdIIHC7BbEk+6BzqllmGJ3pGvhx8VCG0/ZOnhK/ZiI53vetX2Sygw8tokmHfeJvB5edZ3YKSMeJA/eH6gEkAsQD4zVpXFWCtHnnbCq+PiBdWkOVhmLDUvCxAOwkbV6B+z0TldIHuYzjpuFb/AD1yWXyaNmXXEGrW2M6jUwAK4jSCVieG/hBtsa7T9nSD92dlBCtmHZQZkLpQKJNzYC9ZYk9V/JFdwxYO2IY93EZP7QK8xz7viYuI7GSGcDbhRXKqPISPma9UyeDHfSN8dz8Yrzxsi642Km+uSFEjUrONXO2kMRbranmTdUN7kvYzAc5zBdVbQGcFo4b4biJO+/KvUc7hiB51xnsplcRMydawhxSyRylXDW5Cym38xsLgdzml2q8UaiKqMnFWPU0E4IHwtVzN4RItyPrtyqssxB6dKtotMn2Xhxi/0sPofyraisnsxG7zUdoPP8K16qPBMuRjQsXl5iimh4vLzFUIhq4o6i3nefkK08qOAev1NZL7xzsR8wa1cniSinqJ+dIA2mlS1UqQzh8PMKYQGCW4dV4MFNJnc3vHy2qvnc5xEPZlYh7ge6BxAbGxBDCdj0qkQ5GKyjWFYaX/AJQyK6i5vOsGZteg42IjqjhtLMhmdg094Sx3BBAaTaw3BmvPubWlnZ+KdovZLOurS2rigwNySGN/6RMV0uB21AbULKs9CRfqfCuWc34yHQIpAnicqNRctyUkttY2jcVU7Sx34YTUNY0gEgyIBFiC5PELDmvKrjN41SJlFS3Z6HhsWQMd2QE+ZE/jWfnMC8Hzq/kf+Ulo/hpbpwi1QzK39K7eUcvDMvs7C4x95voafPoddjsBVzIpxD7zfQ02ZwSzn0qa2He4HKYfGhjdX+gNefftBSc0f+gg/wDU/wCdel4aQ6fdf6CuG9sMqrZlmeIOGiKS8GZfVA5mCD6VGVNxpEvc3+ysLhyp6ok//wAiTWX7bZZHzOEHQuvcY0AFhcaW3Ug7AgeJFdB2akLlQdwiT590aoe1GdKYqAIXlOR2lwotG3F8qcktO5XyUsTJashgpF+5wLGbRoMb8o61te1OGTlSF97gCwJ4tSx/vQM3mgMrh4rwo7vDZr2GrSI1EdW3MelWfazFZcsWT3gcOLTfWvLnQ6SfwKzP7ByhTLupUKO8cqBsFJkeXMx47DYVvYHJsj42rcJhIRaJRbkRaCTtyg71o9iO7ZbVie+WeRER/KI8o+NUfYHEcnGV5LcBMiG1GQQR6D51Ka1RBkczlAO0keBLSJ4pthsBF4+yZt053J+3cj3jR3jINP2dEmZ5up2oOYLN2mgiySR5NhkEnwm3+9C9rcsHcBjAKRtKzrBnSLk2i3U+RV7Ol3BM6XsSO6bSQRrbaNwFB28RQciln+8aH7JZcplgpj32NtoMGpdlYbAYmp1acQkadXCOSnUxv8B4VonaQWc+uZywdwI1qxDHSbHUwgsRA4mbn9rxrovZrHR8N9AjTjMrcOnjCoT57i9cRnlw8NsUvxBnd2DLyRwTpWCSAXAkwCGFjz7L2Q/5LtAGvGL2JOrUiHVcDT5bVELvdDbLWDfX/wBRh9K4HtLtApmNaqG0B1IJiNWgESOcJ6ah0rvMkgAxY54zlvO34RXCvlF7x2gHU792huN+N2vsCSPOB0pZdVJRFuaHs/2u74+DKAB3cSCSFCoTcxuTy6XruMxXEdkoy5nL6mLFi28rACWARYAFzYyRXc41aY00txMrhd6g2GOlGPP9cqzzniSwC7H+VmEW5j73yPIVYF7LrxVY51R7Nxi92EHpBBEiYIa9XudNCYqHi8vMUSoYvLzpjBEDV6VfyhlBB6j4Eg1Sm8eBq3kXWCojUDLDmA0wT56T8KQFilWfme0tLFb2j+Xp4mlUepHyVol4OR7A7TwsPDZWDanxC5hbGBpSWBGs6UTe8crViYmaBfUiJGnDQSeRCq4JIgQpmbwAetVXfQG4zbBXTdZYBTBM3M6GEzNvhRfFGoTup+OkoimOQub+BmvPWWUvB2OEUdJg4s4WXd2DapggWYyukTtEnTfYeMk60ouA0EsdOJDSw03aCBctMxYXrnMV9eVyun3f+IG2mdLILah4b9PCoHPu2GUJJAUkDbq0wNzBPhHkKp52nTXZCWNNHp+SH8JJ37tJ/tFNji/pU8kP4af9NP8AtFNii/pXodji7gMotx5n8aZ8YK+kzdgJtEmwG89aJlhceZ/GkcMFiTNmHPpcfWgB1HGv3X/y1w3tZgB8yylo14HdJwkhWciWc/ZElB5tXdAca/df/LXD+07gZl2IDaMNHWZhTJ4mgjUshDFzwiNqjJVbgdNlFIGVDTOlZ8xgtM/Oub/aHnXR10RPc4rgk2BQSOGYMz9etdRlDIyxNyUW/j3TX/XWuV/aGG7xAqzOXx90VxsIHEDv0503wBtZjGYZPCcXbusE/EJqP1q/7QvGXJmIC39R8PPcb7iqWafRk8NiBbBw7FZHuqLqCPhIq37T/wD4zRbhWLx058qO7XsMz/ZnEL5RmMScTF2HIMQPWAPWl7GvqDM137pJMkkqZKz5HWNyTF6n7NknKtLT/Exb6g1gxAEg8o9KL7IT3ZkyYXnP2RzordABZYz25ub+QSEWekl2+HKKoe22EWUqF1ThYgiJk6bCtfFM5lPDEcDy7tT9Sax/bYAiCQJwsYCZ/kPQG1JLn5Eza9j0IyeGGnVp4p3mBM+NS7HwSoxZEBsUkeUD8ab2PEZLCEgwkSJg+UgH5VHsF9S429sZhd2Y7D+Y2HgLU21aQHE9r4ZbvpKiRjAEsNziLveRZRXc+yakZeDyZRbww0riO1kX+MSWt3uyjnimY4r/ACruPZhpwWN7uu4j/wDWlNB3LGWw47zxxGPyUfhXI42DGIxJWODRp5DW8gnYkkEHyEya67Jz/Fn/AMZo8tK1y2ZaApMn+Jp359667npa3lUvsBLs6DmcudRszACBeUPObbV2eLvXnnZ+bX95yoEknMMnvCAe6cmbX28K9DxN6tACK7iqqZICeJjPlA22t/hFXOZpjTAr5LLKhhZvvPrVznQ8P3qJzoAeoYvLzolDxRYedMCrjtDLykGD0MEjz2PwrP7SZ1fUlmK6SJI1KYLJPI9CI/A0faDtHMpmUXBwlxUGErlCryXLOhAdA0cLD3hFqs5XtE4yPry+NgOguuKhANjBw32cWIkGeu4NZzVpoqLppnH4meckl2bV9qVMyLXpVgYiOTK6iDBkuTJIk7nrNKvC9NeT1bPQsh2fiIhQJhuCgSS7bAEcl/xG1c9mfZHHIWcZA4DCdLQ4aSZSYJkgz4edd8AKoN2iCusFAiuwLEsQChIJJkch08p3r11iSSS7Hnub5Zndo9iu+WwUVuNJggQNO2kCfBb728TXL9r4D4CmS0kDUNxptCg8/WOdeh4WJqw8NrHUpMrsQTwkHmIIrjPbJgqMigASg8ohhHT3fnUZMcSoTbPTcsOBPuL9BUMXeiZYcCfcX6CoY29dZzg8vuPX8akgufvfgKbL7/GppufP8BQhER76/db/AC1yXtA2IMZ9AwyNAjUXDauQJXZPnM+Ndcvvj7rfVa5L2izqpmEwyjscZtAKxCxoEtJmOMbTsamXBSVujoMNYbABAkWIGw/htt4cq5P9oWGhxE16v+RijhVWsYndh+uldj9vC8zP9jVxf7Qcwy5jCVWicHFP2fsxG/iR+NLJLTFscI6nRu5wTk8PeDhYIO06ToBPQQCT6Vb9ph/wzDwUfEgVXdGfKYQElmwMPYSTKLJgeu1XPaMfwD/T9RQub9kTwyh7PYYGWYKSR3mIbx9o6jEcr1P2PP8ADaxEQu8+6AJqt7JYrNlHLNqIx8dZhRZWIA4egEdetXPZIHu2tz/yr/rTTumNqm0M0/vItbvm/wDhT/X4Vke2GXVsVCwe2HiDhNoeA0iDeAYrbxEIzCG8HFc/+0o+oPzrl/2jY7oU0OUmQYIE79f1aplLSm/ccI6nR1XsugXLKgEBWdR1hWgT40uxsIKuIBzxCTebkA+giKJ7PCMD+t/rUuz8MgYk83J9IgfSq5pktUzh8/hIXxB3ZckurcbLKnEJjpvf412HsqR3TgCIxIiSbBEA38Irg+1sZxnNAdgpM6QwAu+INtzNvhXU/s3xGbLOXxDiHvRctqj+Fh2nx97+qs45Lk41waSx1FSNzJoR3s88ViPLSv5Vx/bBZMMNAP8AxA3k2bHcSIIvDyPGu0yyR3lt8Rj8lE/KuQ7ewyuHGkz3ytBGqxxmabjoZ8PSqltv8mcVuU+yUP71haMFAq5txJHEFCsocHVubCY2avRH3ryf2Vdv39AWYjvcSAW4YDACBPiY9a9UzmOiKXdgqjcnYSYE+pFLDNzW6NMsFF0hxuaRpDf4Uq2MhkFxRIvUE94UTnQA8VDFFvWiRUMUW9aYGfmFhw/+EDYnZp5CmzmIGR4/kYfCQbHxBoPab42tUwRhng1N3hbmwChdPk2/hQsPDc4Q1xr1uTpJAnW5gHeLxepA8SPauKIA1WVR7imIAEe9aNo5bcqes/2vwgucxgnuhl02AtpXlSrm9CHhG/qy8v8AZ7fk8HGOGz4jYiuUaMMcQQ6hBT+HOrSPH3mFV84irhPhMHZXBVtaG4dYYSVUAgbRXSfvCfzg+Rn6VzftBiu2lr6JFoaOcNPrU55PHjbj8Dx1KX5AcXOlk06tIRNIFgAptcbchHS/WqaYesccERBlZkDfcW5n47VeAVN2HQEzaTzi0X36Cp4eCF9w9TyIB5WuRXhvJOW7bf8AJ6KhFcItZLtdgCNRJCgAC6gjh8PM3+lBxu2X5NAB2AuB052/P4ZeZch3RdxHSRNxNwLgg8t9ulYPsTq5kwpII8z4QfGOdU+pzNKKbVfshY4ctGyvbuKrDinaRAHxi/pPKhL2g5JUPCOTqAkk2gCT5bG2+9YuPFmLMGkiQZHFJvtM236DzqOHjKFviE2jYKDYSV8d7eUVXrZkv8mLTC+EdX2b2gyPqZi4CER4wsE+i1S9oEOJmstiICyqzEkAkKD3e5i3unfpWN2fnVszFypi7WgmeHqeQ2APjy6PJvqYBSbwbchvfw2rbF1OaMlCW6bCWLG1qjsdIrQ+H5H/ALDXNe2OTw3bWyF2TAfSQWkTcgKvvEkC1bSYjD9H86ZnPQfOvZf5Kmeevxdozu18mHyKYbPohMuSxE+4yPGkEe9o0/1Vr+0CFsEgRNufjQe86qp9Km+aY2a/wprYTVmX7K4GjKMOuLjPcRGti0R61e9l8JlRw3UECZtA/GaKMblpt6flT4ePpnSoE7wBeiOyS8BLdtjY6Tj4ccmcn+2B9a5X9oGW1vhjUFhWN1DTFtj96tL2nzGGmCMV3bD7vGw3DpAYspsskgcWxm0GtcYysA2kGQDz5+tTlg5QpOr7jxyUZW1fsN2XjphZZsTEIRF1OzHZU3kxVzLsIcAgkG4nYxN+lcd+0PMuuShH7tO+TvCuq6EkQWHujUUk+EVkexXaeMMzmA64mhcBAwdX1tpC6IDD3grNvc7mSRWnCvwQ+fkftnKE5kvrCkGNJSSeJ2kNysw+FdV7A5Q4WC6llJ72RpXSAO7RRbzU/oVU7fGE6ArGrXJnYgC9iOLfYeNVMt2gFINoI1ENcWvIPUHQZn7PpXmvOsWZtuzr06saVHbIPe+8fwrjvaYF1bDw2l1OCxVWGpQH1PIBkArEzyPjWp2Z2jxPJfSEkszDcRYwY1XNwBtVDGzeGHbgJf7RVGKkvuA/DIAUTIva9dUuog43fJlHFJS+DC7Aw4zWDiFlCvmHUJMS0AggAkGwJtyJ2r00sDBUgg7EGQfUV5xlcNMJ9Q1BdOoKXVQWJHFqjc3Gm8+lHbtTE4QXImNwsiZOkNBIBLSBNwCNpjlx9ZGCd7m2TC5u+DvFcGSCCAYNxYixB8Qagcymvuta69GvRI1FJ06gOYm0+I61xH7+5MOba5cCZJFwSYMXi/h12LhZ0jMLmH95VdNJMNoe8R01KDPMitY/UMbe+xlLppdjt0HF+ulFAvXHn2ifh0hbm4BE7xzGxLePu7bitzM9sppIQrrOHK8agajZRMz7xW8c63h1OOd0zOWGUeUaeBiq6h0MqwkHw9dvKmxtvWuf9jH0ZZUdpcM5mACQxkagCYImDfcelb2NiDTMjet1JPgzcWuTn+189ox4DKp0YUyVuC+LYTvtyqWFnRCoSCTgayJvc3MDxPX0rm/bdXfHTRAZsBimpdjhukzO4Yug01Z7KR3wUfBRUVwWxFnQxctx6lgjVKn4nrSbBIPmvYvIYjs74EsxJY95iiTz+3Spac1/4K/+YP8A9KVTv4LpF8ZpgABjJYRbAxDJA3kuBQcw+pQpctEQBhwOm5ZjtNIrFQeevzi3OvEn1uWUXFpUzsjgUXaZQd3RQGALEFQAZEC+5Emw+R8JfKZqZYBGMxIJkxI4pExIJ+NVs3lGYHSTqghWILFJHvKNQjlPUCPOrlMpjDUpBUAwCYuo2O9pk2rDmDa2Ztb7h+0FOrUVVZYgtqYlhpY9RcaRHQChLihbm8qLgwb3U2EczbpNLG7JYxKhoIIsDcDcTz3Ej5VVPYmJ7y8LaQsMywIkgQo69DzpR3q3/RO6LOGyPLFtAiBGkj3mQxJF4VgPFvjWOZwWhg2khnFzOsohYcO5MiPJTvUsl2LiKoVmSZuVkA+Q5dfOetGxPZ9WjU0wwYXazXv8z8a01RjLcmpNE8ZMNCq4Q1AFNQhuIBjsrSsQhMbi3nXXYGZwZ1a11adOoiDp30k7b1x+F2IqNrGI54YAiR5771f7ojqf14VX3rg7ikyXitbs6kZnDP20/uX86IpU7EHyIrkR5fr1qQTrHwq19Wl3iv3RH268nW6KbRXKqSNm+BonfOPtuP62/OrX1aPeP9i+3fk6XTTaa55c3iD7bepB+s1Ne0cUfbJ/pT8q0X1TF3TF6EgntL2YMyi4JbSpLs5i0d06LfaQ+IjR/gNa2WbUitzKKTYi5AOx2rJXtXEG+k+a/kRRE7XdvsgAbmCIHWT/AK1rH6hhltb/AET6Eh/aFNeEcHYPCs0E6BIMwNySIH4xFUMtl8TSrlCMXEVnxTDLxOdZTl7sBRMEBfGivghjIULZT70iQDfYGbXMmas5jPMV0AabQTYyIgiI86iXWRlcW6XajT0GqlRhY2KSIJJItP2bBiABcQB5zA86QdG4tRGlioMTB3UDTYGY9KtNhPMiTDKJtMzvtY3F/pyrvd2leEG+0kgiCpIJJ5yN/lXBJ7XZskFwVcCD7pkiGMDTvv6/A7WofdtqCWEiVIuYEW6cunLnRHix2AmItz4uXO/6iq2ZxBChucqACZAIJBYmJtasVLuacEVcCNQAJYW/mIhl4utjyqSi7SP5TcEhjcsQPted/iKFiKQCATrACrNp2hj1HEbVUfMsGAVQSTfdBaYtM6iIJHTyopvuKy8iqUJEsA3ERYLB2PlHht4xTgiImJNzG8dWaw9TyoMlpNxBmyMAWMlYtsFYCADM9abDzKuNa8KlQOIsXmB7pkETIsfUXpuF/wAAnRaJIYFZKnVtI6kEC8rY84uOtDwMXTIIUbmJmG3lQTbnt09APK4gYFVJBG+grcg6ROnlb160fDw76uDWVAiwKifdbrv538aGtLpMLbJ5fMBG0ltKsZYIxmNiQVIIOgAf1b2rdJGI4QqHTfj4gbHSVBBBMncRYHesXK5ELDxBUrMFhLGSbkgncjetjIvoMBAi6QOtwQBYC1i3hbxmuvpep01Fvb3M8mJyTdblnOdkYeIAHWw5C07WMcrCiZPs1MNQiAgCftEm5kyTc3NQxc0VhVmYJMHVvIEmOvLxoOLm2YAXBkbHff7Np2/XL0JdZjjtyzCPTSZodwOrf3H86VZWJikE/nSrm/8ASf8Ar/Zv9n/0RLnp8/14VE4lKlXz+pmpHX4/KmnwilSqtToQtHWmC0qVFuxkoHn8qhApUqNTAfTSimpUgGI8ag6/r/alSqRiZAeo9Zp+6HWmpVoiRDDHn50UJSpVSS2ELu4vy8f9KjEEwswYN4nV/sf0ZpUq1RcR0doMHcTBi4+Fp/O1O2NMgi2xAttYxSpUNlCxcSJEBr2AsSfM9I+lUMVRrB2diCw35kWa1tz+FPSpx35JkJlI4ecTE2F7T1vy8Kq4uXkgzGmbdbXnqIm1NSo7oRDNyQVLFQ6Q5PF7xIAB3tBp1wdBIUTJ1amiZm+3IAi0X8L0qVWpNonuVv3ZiYDCIBIaSCATOleUyVubAzfakmKwBLhQN9YniW/IXkQBsNp8KVKtFuqfsHcP2exfTyuSJg7SVM/dBt/igzyu4eCHQEXZRrCksQpWZUEkT72/O1KlUz248hEsYb4gGsgKsNzLaVCgkwW6DYT+d9QYva1iIPiTxedKlWJvEjk21X5EDTqAJ8DYW5foUXGUkbgCQbi8MwgArtAkfCnpVa4YENS+PxNKlSpamVR//9k=",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6213862760772, 55.834330228300175
                ]
            }
        },

        {
            "type": "Feature",
            "id": "28",
            "properties": {
                "text": "Павильон №28. Эколого-просветительский центр «Пчеловодство»",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/1de/1000_424_1/1dee473710cbc84f279193c889ec3355.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61623110418807, 55.836309243334334
                ]
            }
        },

        {
            "type": "Feature",
            "id": "27",
            "properties": {
                "text": "Павильон №27. Физкультура и спорт",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/66c/1000_424_1/66c6f61a6e86d7b36cad27470a6a474a.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.612635541282586, 55.83450234676155
                ]
            }
        },

        {
            "type": "Feature",
            "id": "5010",
            "properties": {
                "text": "Кафе «Лето»",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/7e4/1000_424_1/7e45cfbacb3f359104962381129902ab.jpg",
                "check": "false",
                "obj_type": 5,
                "icon": 'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61820665648793, 55.83650602413417
                ]
            }
        },

        {
            "type": "Feature",
            "id": "51",
            "properties": {
                "text": "Павильон №51. Мясная промышленность",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/626/1000_424_1/6268486cf2a3d243ed43af648d2e4a21.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61937024108454, 55.83711278695772
                ]
            }
        },

        {
            "type": "Feature",
            "id": "35",
            "properties": {
                "text": "Павильон №35. Главтабак ",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/185/1000_424_1/185ef1e2a5e7d8cdecfc2901274e2eb8.jpg ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61436799074656, 55.838382961782486
                ]
            }
        },
        {
            "type": "Feature",
            "id": "5011",
            "properties": {
                "text": "Ресторан «Золотой колос» ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/745/1000_424_1/7454d3b1066dc283ffce7b5abbf825fd.jpg",
                "check": "false",
                "obj_type": 5,
                "icon": 'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61499951946756, 55.839234044881294
                ]
            }
        },
        {
            "type": "Feature",
            "id": "37",
            "properties": {
                "text": " Павильон №37. Птицеводство",
                "color": "#0000ff",
                "imageSrc": "  https://vdnh.ru/upload/resize_cache/iblock/8a9/1000_424_1/8a9c324e67862bcd8915b76bd4246a2b.jpg",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.618202272330166, 55.83961398667491
                ]
            }
        },
        {
            "type": "Feature",
            "id": "8001",
            "properties": {
                "text": " Центр креативного арт-дизайна La Atmosfera",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/0cf/1000_424_1/0cfdbfb4d49c9815b9569817c9e9b870.jpg ",
                "check": "true",
                "obj_type": 8,
                "icon": 'Мастерские'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.620352103668814, 55.83999092222616
                ]
            }
        },
        {
            "type": "Feature",
            "id": "44",
            "properties": {
                "text": "Павильон №44",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/409/1000_424_1/409b430b43994a847241530bfebd04cf.jpg ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62547231049106, 55.84061944334837
                ]
            }
        },
        {
            "type": "Feature",
            "id": "50",
            "properties": {
                "text": "Павильон №50. Молочная промышленность ",
                "color": "#0000ff",
                "imageSrc": " data:image/jpeg;base64,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 ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61964568373184, 55.837736599123744
                ]
            }
        },
        {
            "type": "Feature",
            "id": "49",
            "properties": {
                "text": " Павильон №49. Резиденция «Каскад + digital» при поддержке Музея Москвы",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/947/1000_424_1/9470e2472d0bff88e17cf5a30e9a3d34.jpg ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62036722154738, 55.83771355653125
                ]
            }
        },
        {
            "type": "Feature",
            "id": "40",
            "properties": {
                "text": "Павильон №40. Школа пекарей",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/09a/1000_424_1/09af11c4666a1c1488436fbb7eea46cc.JPG ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.620670678832, 55.8381438218961
                ]
            }
        },
        {
            "type": "Feature",
            "id": "48",
            "properties": {
                "text": "Павильон №48. «Главпиво» ",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/6cf/1000_424_1/6cf331430af75c7ef5d99be0a7f1c9bd.jpg ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.622525561484316, 55.83764326520888
                ]
            }
        },
        {
            "type": "Feature",
            "id": "41",
            "properties": {
                "text": "Павильон №41. Центр национальных конных традиций ",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/44c/1000_424_1/44c6908c5ec305776d2f41918408e5d7.JPG ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.622840398500294, 55.83812891179298
                ]
            }
        }, {
            "type": "Feature",
            "id": "42",
            "properties": {
                "text": "Павильон №42. Центр национальных конных традиций ",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/b6c/1000_424_1/b6c4e451081f60a3998e673d93380da9.JPG ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62318558120901, 55.83834404277068
                ]
            }
        },
        {
            "type": "Feature",
            "id": "43",
            "properties": {
                "text": " Павильон №43. Показательная конюшня Центра национальных конных традиций",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/55d/1000_424_1/55dc904dcb493ab461d228324ebd9942.JPG  ",
                "check": "true" /*!!!!*/ ,
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.623853187279884, 55.83811187166518
                ]
            }
        },
        {
            "type": "Feature",
            "id": "46",
            "properties": {
                "text": " Павильон №46",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/9a6/1000_424_1/9a608d15bfd8ba07d5495f0dc48bc749.jpg ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6281046199908, 55.83825323113406
                ]
            }
        },
        {
            "type": "Feature",
            "id": "421",
            "properties": {
                "text": "Дворец бракосочетания",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/d43/1000_424_1/d4356c89a6f1845c117848115338b49e.jpg ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6266201443426, 55.83566550010403
                ]
            }
        }, {
            "type": "Feature",
            "id": "62",
            "properties": {
                "text": "Павильон №62. Международный центр балета ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/dac/1000_424_1/dacd869cd7f4007bf7b1c4a8a7411093.jpg  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.627743268096744, 55.83508852451612
                ]
            }
        }, {
            "type": "Feature",
            "id": "61",
            "properties": {
                "text": "Павильон №61. Центросоюз",
                "color": "#0000ff",
                "imageSrc": " https://vdnh.ru/upload/resize_cache/iblock/eed/1000_424_1/eed4fbc6199ddb17ecf25d3ef07dc3c2.jpg ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62875226356814, 55.83464544411203
                ]
            }
        }, {
            "type": "Feature",
            "id": "60",
            "properties": {
                "text": "Павильон №60. Потребительская кооперация ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/c8f/1000_424_1/c8f682d2c6ad8450987975ffcd4f3e10.jpg  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62819845402369, 55.834040460792494
                ]
            }
        }, {
            "type": "Feature",
            "id": "59",
            "properties": {
                "text": "Павильон №59. Политехнический музей ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/190/1000_424_1/190b1ad04ed19fd9e4d883ca670721b7.jpg  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62792534246567, 55.833124446994674
                ]
            }
        }, {
            "type": "Feature",
            "id": "64",
            "properties": {
                "text": "Павильон №64 «Оптика» ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/cf6/1000_424_1/cf6e724de27b8779e22f306a37803bd7.jfif  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62936676461448, 55.83274951418124
                ]
            }
        },
        {
            "type": "Feature",
            "id": "461",
            "properties": {
                "text": "Павильон «Умный город» ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/f36/1000_424_1/f36063bbd615c7c6f5ffdf75a87748af.jpg  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.630800600315794, 55.8338870832187
                ]
            }
        }, {
            "type": "Feature",
            "id": "63",
            "properties": {
                "text": "«Техноград». Инновационно-образовательный комплекс ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/16c/1000_424_1/16cfd8ac3c3593a7a67803134402305a.jpg  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.632257195391716, 55.83513538848808
                ]
            }
        }, {
            "type": "Feature",
            "id": "74",
            "properties": {
                "text": "Медиа Школа Ольги Спиркиной Ostankino.tv",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/fd7/1000_1000_1/fd75631f2c1b54d2e7bf3290dc0e0e74.jpeg  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63262134417765, 55.833955251111135
                ]
            }
        }, {
            "type": "Feature",
            "id": "68",
            "properties": {
                "text": "Павильон №68. Выставочно-торговый центр Республики Армения ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/adf/1000_424_1/adf1d7d5a003b7f2125756ec007ee7e6.jpg  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.633735923307356, 55.83092934370761
                ]
            }
        }, {
            "type": "Feature",
            "id": "67",
            "properties": {
                "text": " Павильон №67. Выставочно-торговый центр Республики Карелия",
                "color": "#0000ff",
                "imageSrc": "https://lh5.googleusercontent.com/p/AF1QipPbyqxO9vRLVAKQGqwSN8lt_hobKi_7H6NxU8o=w451-h240-k-no  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63259917158711, 55.830990147628
                ]
            }
        }, {
            "type": "Feature",
            "id": "71",
            "properties": {
                "text": "Дворец гоусуслуг ",
                "color": "#0000ff",
                "imageSrc": "data:image/jpeg;base64,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  ",
                "check": "false",
                "obj_type": 0,
                "icon": 'Павильоны'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6343876086525, 55.82993678105302
                ]
            }
        },
        /* Музеи */
        {
            "type": "Feature",
            "id": "228",
            "properties": {
                "text": "Музей ВДНХ ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/3c6/1000_424_1/3c64bdf3f7be9a9398b15c01f31bc097.jpg  ",
                "check": "true",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.639812551022274, 55.826608085957524
                ]
            }
        },
        {
            "type": "Feature",
            "id": "5",
            "properties": {
                "text": "Павильон №5. Музей городского хозяйства Москвы ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/66d/1000_424_1/66d63545b4d2bd1007d467529daa4f1d.jpg  ",
                "check": "false",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62971982839198, 55.82870919640523
                ]
            }
        },
        {
            "type": "Feature",
            "id": "13",
            "properties": {
                "text": "Павильон №13. Музей Востока ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/70f/1000_424_1/70f3ca8cb264f8c552fba96358339ddc.jpg  ",
                "check": "false",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.627788798402804, 55.83099647450475
                ]
            }
        },
        {
            "type": "Feature",
            "id": "58",
            "properties": {
                "text": "Павильон №58. Музей славянской письменности «Слово» ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/84f/1000_424_1/84fcccdce2aae4bdfd85b1d8d4b7ce97.jpg  ",
                "check": "true",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62717516913428, 55.83267697412124
                ]
            }
        },
        {
            "type": "Feature",
            "id": "333",
            "properties": {
                "text": "Интерактивный музейный комплекс «Буран» ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/001/1000_424_1/001e8425aa8bfb0c268a6d631d16b1d8.jpg  ",
                "check": "true",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.623062120851095, 55.83213609353308
                ]
            }
        },
        {
            "type": "Feature",
            "id": "25",
            "properties": {
                "text": "Павильон №25 «Нефть» ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/7aa/1000_424_1/7aa65c655613653e9ca42c6fe92ccb6b.jpg  ",
                "check": "false",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61958834888249, 55.83358379176541
                ]
            }
        },
        {
            "type": "Feature",
            "id": "26",
            "properties": {
                "text": "Павильон №26. Музей Транспорта Москвы ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/b87/1000_424_1/b87b616e02c79a5cfcaa9c5fcc6a0a4b.jpg",
                "check": "false",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62137526243261, 55.83431085756989
                ]
            }
        },
        {
            "type": "Feature",
            "id": "34",
            "properties": {
                "text": "Павильон №34. Центр «Космонавтика и авиация» ",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/d71/1000_424_1/d712272151c2f06689680db40b1ea9f4.jpg  ",
                "check": "true",
                "obj_type": 1,
                "icon": 'Музеи'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.621929682329146, 55.83506073496904
                ]
            }
        },

        {
            "type": "Feature",
            "id": "1000",
            "properties": {
                "text": "Макет Москвы",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/fed/1000_424_1/feda65d516e9e380f3c6e6b07280bbb6.jpg",
                "check":"true",
                "obj_type":1,
                "icon": "Музеи"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.630044584932776,55.83446773292342
                ]
            }
        },



        /*Развлечения */
        {
            "type": "Feature",
            "id": "2",
            "properties": {
                "text": "Павильон №2. Робостанция ",
                "color": "#ffd800",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/407/1000_424_1/4074740099f3e8a328162ee91fd8ef47.jpg  ",
                "check": "true",
                "obj_type": 4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.631472899778274, 55.82864212536624
                ]
            }
        },

        {
            "type": "Feature",
            "id": "7",
            "properties": {
                "text": "Павильон №7. «Союзмультпарк» ",
                "color": "#ffd800",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/96c/1000_424_1/96c0bc87eb1accb23474e32b92f5c971.jpg  ",
                "check": "true",
                "obj_type": 4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.626718134855764, 55.82773069783097
                ]
            }
        }, {
            "type": "Feature",
            "id": "4001",
            "properties": {
                "text": "Парк интерактивных развлечений Engage VR ",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/edf/1000_424_1/edf6413b3e70c0e8dfab70992251a39d.jpg  ",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63952240072467,55.82653042523673
                ]
            }
        },{
            "type": "Feature",
            "id": "4002",
            "properties": {
                "text": "Аттракцион «Круговая кинопанорама» ",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/2bc/1000_424_1/2bc1999ad9713c209db391773c1d9b0a.jpg  ",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62994381138991,55.82713339559126
                ]
            }
        },
        {
            "type": "Feature",
            "id": "17",
            "properties": {
                "text": "Павильон №17. Галерея «Лес» ",
                "color": "##ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/8a3/1000_424_1/8a39e308208ba13c622c1bbbce632cdb.jpg  ",
                "check":"true",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.624096323857316,55.83134066070514
                ]
            }
        },

        {
            "type": "Feature",
            "id": "9",
            "properties": {
                "text": "Павильон №9. Театр сказок ",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/90b/1000_424_1/90b13444807c3df8834de2223b015b21.jpg  ",
                "check":"true",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62807480667724,55.82906534695956
                ]
            }
        },

        {
            "type": "Feature",
            "id": "475",
            "properties": {
                "text": "«Детское посольство» ",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/474/1000_424_1/474958ec89647802f59016b021368cdf.JPG  ",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.620166840193825,55.83077818474917
                ]
            }
        },

        {
            "type": "Feature",
            "id": "545",
            "properties": {
                "text": "Зеленый театр ",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/07f/1000_424_1/07f37ff8a180461914fb4ce856e6bd43.jpeg  ",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61755251834597,55.831578436823506
                ]
            }
        },
        {
            "type": "Feature",
            "id": "55",
            "properties": {
                "text": "Павильон №55. Музей оптических иллюзий",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/e38/1000_424_1/e388004e8c3fbdd09f71e765b797ce35.jpg",
                "check":"true",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62306153584408,55.835434388995914
                ]
            }
        },

        {
            "type": "Feature",
            "id": "53",
            "properties": {
                "text": "Павильон №53-54. Музей Гаража особого назначения ФСО России",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/c0c/1000_424_1/c0ce4e665c197fd8b0026eda3b9381fd.jpg",
                "check":"true",
                "obj_type":4,
                "icon": "Музеи"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.621309359375694,55.83717739410509
                ]
            }
        },

        {
            "type": "Feature",
            "id": "23",
            "properties": {
                "text": "Павильон №23. «Москвариум»",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/a89/1000_424_1/a89f49c806ba0d986a1c999488dacf0b.jpg",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.619149351447625,55.832668147290526
                ]
            }
        },{
            "type": "Feature",
            "id": "4003",
            "properties": {
                "text": "Sky Town. Высотный веревочный парк",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/095/1000_424_1/0957b338d189f1e8913b1559e171a6ba.jpg",
                "check":"true",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61468839007419, 55.83590444079063
                ]
            }
        },{
            "type": "Feature",
            "id": "4004",
            "properties": {
                "text": "Выводной круг",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/fd6/1000_424_1/fd6f6fdbabc38c367c76f28da3e77257.jpg",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.623280306229454,55.83758798946742
                ]
            }
        },
        {
            "type": "Feature",
            "id": "4005",
            "properties": {
                "text": "Студия детских настольных игр Dodoland",
                "color": "#ffd800",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/a41/1000_424_1/a41b24353fed55c3145c291f33bb13f2.jpg",
                "check": "true",
                "obj_type": 4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6328929957186,55.8331932598435
                ]
            }
        },
        {
            "type": "Feature",
            "id": "4006",
            "properties": {
                "text": "Колесо обозрения «Солнце Москвы»",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/385/1000_424_1/38571dd60c5a0b914dc096638a06ceb0.jpg",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62693575425107,55.82672991238611
                ]
            }
        },
        {
            "type": "Feature",
            "id": "4007",
            "properties": {
                "text": "Зеленый бельведер в парке «Останкино»",
                "color": "#ffd800",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/211/1000_424_1/2114cd0b42f8e550467e7bb1d789fdde.jpg",
                "check":"false",
                "obj_type":4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61797547384101,55.83009097589116
                ]
            }
        },
        {
            "type": "Feature",
            "id": "4008",
            "properties": {
                "text": "Южный розарий ",
                "color": "#ffd800",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/1fe/1000_424_1/1fe5befa808c8bc58ea1e2c0ab4b1a0d.jpg",
                "check": "true",
                "obj_type": 4,
                "icon": "Развлечения"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63345645259839,55.82765722790345
                ]
            }
        },
        /*Еда */
        {
            "type": "Feature",
            "id": "5001",
            "properties": {
                "text": "Ресторан «Арарат» ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/eb2/1000_424_1/eb291eedf77e654dc83a2f5231dec23b.jpg  ",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63370066670472,55.83074650594176
                ]
            }
        },

        {
            "type": "Feature",
            "id": "5002",
            "properties": {
                "text": "Киоск «Булочка» ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/b6f/1000_424_1/b6f06fd807a41bc561758e17a7b8ecf2.jpg  ",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63190055564591,55.830807957061346
                ]
            }
        },

        {
            "type": "Feature",
            "id": "5003",
            "properties": {
                "text": "Чайхана «Долина» ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/610/1000_424_1/610895a65a5b09f60b7ee41ba82a6c2e.jpg  ",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62827422718253,55.83391834407539
                ]
            }
        },

        {
            "type": "Feature",
            "id": "5004",
            "properties": {
                "text": "Ресторан «Московское небо» ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/9f3/1000_424_1/9f36bcd0eed971a36aa5c85d5886e1cf.jpg  ",
                "check":"true",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.625782153026954,55.83532442233307
                ]
            }
        },

        {
            "type": "Feature",
            "id": "5005",
            "properties": {
                "text": "Кофейня LeoCoffee ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/545/1000_424_1/5457625ca35799d1fa27ef7125e9719f.jpeg  ",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62612729938308,55.83620155288672
                ]
            }
        },
        {
            "type": "Feature",
            "id": "5006",
            "properties": {
                "text": "Ресторан «Рыбацкая деревня» ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/c34/1000_424_1/c34eecb2afd6b6ed5bb11c74bb1d73ba.jpg  ",
                "check":"true",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.626648829373394,55.838627875109545
                ]
            }
        },

        {
            "type": "Feature",
            "id": "5007",
            "properties": {
                "text": "Кафе «Старое место» ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/61b/1000_424_1/61b530846271d87adb2a8ccb05a6be8e.jpg  ",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.616570300654224,55.8373166962476
                ]
            }
        },
        {
            "type": "Feature",
            "id": "5008",
            "properties": {
                "text": "Кофейня «Шоколадница» ",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/iblock/89c/89c10ecf4d190f03cd18080fd8286808.jpg  ",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.619435704061736,55.833160337798866
                ]
            }
        },
        {
            "type": "Feature",
            "id": "5009",
            "properties": {
                "text": "Ресторан «Оттепель»",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/a85/1000_424_1/a8509a0e1dd009b58bc91e6668f72cf7.jpg  ",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61891687558359,55.83131888791846
                ]
            }
        },
        {
            "type": "Feature",
            "id": "5012",
            "properties": {
                "text": "Restomarket",
                "color": "#0000ff",
                "imageSrc": "https://vdnh.ru/upload/resize_cache/iblock/f43/1000_424_1/f433278cd0a51ca2efbfeca298417a9e.jpeg",
                "check": "false",
                "obj_type": 5,
                "icon": 'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62480262910881,55.83626020372922
                ]
            }
        },
        {

            "type": "Feature",
            "id": "5013",
            "properties": {
                "text": "Кафе «Свадьба соек»",
                "color": "#ffa500",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/5d6/1000_424_1/5d6dce152a66e014310cdc38ac81fe67.jpg",
                "check":"false",
                "obj_type":5,
                "icon":'Еда'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62542929288843,55.837873683541254
                ]
            }
        },
        /* Туалеты */
        {
            "type": "Feature",
            "id": "6000",
            "properties": {
                "text": "Туалетный модуль ",
                "color": "black",
                "imageSrc":"  ",
                "check":"false",
                "obj_type":6,
                "icon":"Туалеты"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63745891260216,55.8276753196477
                ]
            }
        },

        {
            "type": "Feature",
            "id": "6001",
            "properties": {
                "text": "Туалет ",
                "color": "black",
                "imageSrc":"  ",
                "check":"false",
                "obj_type":6,
                "icon":"Туалеты"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62772564974823,55.82976893085878
                ]
            }
        },

        {
            "type": "Feature",
            "id": "6002",
            "properties": {
                "text": "Туалет ",
                "color": "black",
                "imageSrc":"  ",
                "check":"false",
                "obj_type":6,
                "icon":"Туалеты"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62085232692323,55.832879201432924
                ]
            }
        },
        {
            "type": "Feature",
            "id": "6003",
            "properties": {
                "text": "Туалет ",
                "color": "black",
                "imageSrc":"  ",
                "check":"false",
                "obj_type":6,
                "icon":"Туалеты"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62886483045236,55.836720190412855
                ]
            }
        },        {
            "type": "Feature",
            "id": "6004",
            "properties": {
                "text": "Туалет ",
                "color": "black",
                "imageSrc":"  ",
                "check":"false",
                "obj_type":6,
                "icon":"Туалеты"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.625046754440135,55.83741814639208
                ]
            }
        },

        /* Спорт */
        {
            "type": "Feature",
            "id": "22",
            "properties": {
                "text": "Павильон №22. Скалолазный центр BigWall",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/a2a/1000_424_1/a2ab5ad7476f423e6736bf74d285a792.jpg  ",
                "check":"true",
                "obj_type":7,
                "icon":"Спорт"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61631784108661,55.83244752106414
                ]
            }
        },        {
            "type": "Feature",
            "id": "7001",
            "properties": {
                "text": "Комплекс спортивных площадок в аренду",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/192/1000_424_1/1923ec7cd520b23c9c4c929f268c5440.jpg  ",
                "check":"false",
                "obj_type":7,
                "icon":"Спорт"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61514608709706,55.83483177656004
                ]
            }
        },        {
            "type": "Feature",
            "id": "7002",
            "properties": {
                "text": "Универсальная спортивная площадка для игры в мини-футбол и стритбол",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/2cf/1000_424_1/2cf1dffde27b3bfd8a989ee34302dcb9.jpg  ",
                "check":"false",
                "obj_type":7,
                "icon":"Спорт"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61331405918808,55.83503467015676
                ]
            }
        },        {
            "type": "Feature",
            "id": "7003",
            "properties": {
                "text": "Десткая игровая площадка",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/eeb/1000_424_1/eebb904451b2d052928c63108d4115f1.jpg  ",
                "check":"false",
                "obj_type":7,
                "icon":"Спорт"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61409828787803,55.83743191620209
                ]
            }
        },        {
            "type": "Feature",
            "id": "7004",
            "properties": {
                "text": "Площадка для настольного тенниса",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/848/1000_424_1/848def5b4b8fb57486b3c66d6900a3e6.jpg  ",
                "check":"false",
                "obj_type":7,
                "icon":"Спорт"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.61306554112791,55.83823296380066
                ]
            }
        },
        /* Мастерская */
        {
            "type": "Feature",
            "id": "8002",
            "properties": {
                "text": "Архитектурно-художественная студия Artdomus",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/693/1000_424_1/693e8ab413a9d81891afc5eaee9e54d1.jfif  ",
                "check":"false",
                "obj_type":8,
                "icon":"Мастерские"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63476440943363,55.83348220638667
                ]
            }
        },        {
            "type": "Feature",
            "id": "8003",
            "properties": {
                "text": "Арт-резиденция музея «Гараж»",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/103/1000_424_1/103abbaa535093a0f6e3afea08e0cce0.jpg  ",
                "check":"false",
                "obj_type":8,
                "icon":"Мастерские"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62720638766165,55.83629396150301
                ]
            }
        },
        {
            "type": "Feature",
            "id": "8004",
            "properties": {
                "text": " Павильон №47. Дом ремесел",
                "color": "black",
                "imageSrc":"https://vdnh.ru/upload/resize_cache/iblock/713/1000_424_1/7130d2293c7c1037eb4e67929e1ea283.JPG ",
                "check":"true",
                "obj_type":8,
                "icon":"Мастерские"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.62405914696662,55.836948781077446
                ]
            }
        },

        //Входы
        {
            "type": "Feature",
            "id": "10000",
            "properties": {
                "text": "Арка главного входа",
                "color": "black",
                "imageSrc":"data:image/jpeg;base64,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",
                "check":"false",
                "obj_type":10,
                "icon":"Вход"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.63732414012193, 55.826472842897765
                ]
            }
        },{
            "type": "Feature",
            "id": "10001",
            "properties": {
                "text": "КПП 1-й Лихоборский",
                "imageSrc":"data:image/jpeg;base64,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",
                "check":"false",
                "obj_type":10,
                "icon":"КПП"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6287, 55.8401
                ]
            }
        },{
            "type": "Feature",
            "id": "10002",
            "properties": {
                "text": "КПП 1-й Северный",
                "check":"false",
                "imageSrc":"data:image/jpeg;base64,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",
                "obj_type":10,
                "icon":"КПП"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6406, 55.8271
                ]
            }
        },{
            "type": "Feature",
            "id": "10003",
            "properties": {
                "text": "КПП 2-й Северный",
                "check":"false",
                "imageSrc":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgYHBwcHBwZGhwdGBwaGRgZGhgaGhwcJC4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQsJCs0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIAJsBRAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEcQAAIBAgQDBAcFBQcCBQUAAAECEQAhAwQSMQVBUSJhcZEGEzKBobHBQlJi0fAUcpKi0hUjgqOy4fEzwiU0c+LjFiQ1U2P/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QALBEAAgIBBAEDAgUFAAAAAAAAAAECEQMEEiExQRNRcSJhBTKx0fAUI0KBof/aAAwDAQACEQMRAD8ArznnMwYm9vj8ajkk7k33ropRX2UYxj0j5SU3LtiRS11cKayYtKKaW5bn9eVJp637uX+9ENe4uqdvPl/vXaet/l5Us0lYN+ws100ldWFFmumm101rNQ6a6aaKWaxqFmuBpAaWa1moWa6aSa6aFgodNKKaKVa1moNh70DLEHGcDkL+82jyoyUzCf8AvXWPsqZ5WLVHJTa+S+H8svgI9cK56SrI5pIUUtJTlrNgSOmnCk008ClbDVjADUlRTAKIopJSHjEetFQUNBXYjljoUwftMPsju/EeXn4xky8YWK3bJQeyLMep5oPqfdUpByG1Dw0CgKBAGwoqCptlPsiq9Lv/AC69+InzNX+ItZ70x/6OH34yfWtLiC9c+76mdLj9C/2ASioKYFp6itJiKIQCipQ1NGQTUZstFD6WpH7A/wBw11R3x9y2x+x5vFKBXUm/h8/CvobPCSsQnkL/AC99Ktv18q6K6t8hv2GARS0pNJNGzHV1JNKKFmOmkNdRMTLOu6kTcUHNLsaMG+gRNIGrTejWRwcTDcOoLT9rlFxHTvqzymNhOGwtCLpIGpVAv3GOlceTWqMmkm6O3Hom4pt1ZhtVKTFjY99q2eW4AiYjOpRr9noJ7uvfVtmMFGKnFwUbbtKL2sASOXjU5fiMU+FaKR0Da5dHm2ql1VvDwfJ4kyuk9QxU37haq3MeiQXU6PrUeypIB7r86eP4hil3aEegyLqmZjDUm+yiJbkJ8L1fYXotiYgJwnRwNpOknap6cFwiVLroGmGWbOeRMdL1dYmSfDwGGWCvFwCTr32XqB0qGbXu1sdfoXxaJJPev3PPsfKOjMroQUMNEED3ihK1a/OYGNiHUiGCpD4kBgeumRMzNz0rPZ3hjYYkMriYtOoW5g11YdUpcSqzkz6Vx5inQLLoCb7UJyi5vQpa6G8Wbms9OdOwXpMbFAx8ME7qwHjK02W7TsGFKmq8EjEw6GFo7mhTVoyZCcVYmmn6a4NTprNsVRQgFOFJSqKDNQ9RRCQoJYwBvSIKCjesYN9hT2ejN9790cupv0qcm+kWhC+X0FVmiQAC1lB+yPvP+Xuo+DhBRAM8yTuSdyaaTShqRoO7wGUUbDqMrUfCNJJDRZT+mJlMuvM4y27gN/jWnxiJPvrNcavmsqD1Pzq9NcyVyZ1SdRQSacKCpoi0WKmFiiYTlTIMGhA0/BTWypftEC2/fUp9clI9mly2TxCoLYjA9LV1WeBloUDeBEkyfOurzd56WxHhk9fKnTXq3/01lDhnDGEsfeE6h36jea88z/AMxhs0YTlAzaTYyoNjY9K9/BrseRtdfJ4mbRzgk+19itmkJpNJiSDAMGQbHoehomCVuD5117lRybOaY7L5N8QgIpOqwJ9mR37Vbp6IZlgrLoOoSRq9m/x91Ll+MIiBFEL03q3yHFGW4NuhrztRqc8XwqR6WDTYpLl2ZviXo/mMAFnQlB9pDqX38x7xVbtY7ivThxguIKzNutYf0oQDMG0EqCR33+kU2k1csstslyLq9LHHHdFlbguAwLCQDMc6uuHcVAxZYHtxvBWOX0qjUXFXmXw1hTouB0vPWrapxUeSWkUm+C+zWcSNcKOoAAJqm/ahMIToN4NiDUXMhiYII8a7Dw68xJJHpttsuMs7G0/71Mws2U2bxmqnBxYo4zSjkKjKPJVMs0wg5lRHWIg85oePjskSfy8qCmdhbWmhMobdjPftSVzyG/Ym4mbGIvavG3KpGGXVBoYkRtzFZ/EGnnakfjKIBDazsFUifntRcVQNxpOH8RdWg7dKb6V8MV8E4yJ/eCIAAhgW7U9PHuqnyvFk1MXIXQVmSPteHKa1eFxEFQxiOV7W69KXc4yUohcVKLizE8WwBiYaY2HhhdKw5WNMcj8xWbzBnHwPBvpevUTmsFtcqAG9oAWexBkcvnNY30jy2H+1YKYGC4/unY6QSDJG4vER/NXfh1NrZJeTjyaba3OPsQcQ0GnYpvBFxyO9MmvWj0eTN8izT1NDFOFOTTCg09aGtNdyToXfmfujr49B79qR8DxViu2tig9gWc8yY9gH5nvipU8hsNqCihQANh+vOnA0iiUlK+F0PBoignlQwKKgvegxUKhqRhUILe1TEwSI2PgfnUZSQ8U2UPFj/wDe5X3/ADNX7tWe4v8A+fyw7vq9aDEFc0O38nVk4ivgRWoivQkFPinkJFhAxJAHMx51p+D8E0MXchmXYfZB6yfnVbwHh4diXUhSvZMGJPMHratFh5HRLetfTuQSItG591efqMvO2LPQ0+L/ACaImcXOFyUKqvIEia6hZzK4GMxc45U7RqAiO411ch1WvcxuR9PML2Wx1X98Mp/mFaDLcdwcRZGYR/BgfK9YlWVrOARztNEOSybr2sBNXXTB8678mjlHr/hyY9ZCXfBvMzmst6p0JTtLcGOljWGzWXwygKaRHMbmetRTwbKGCrYiH8GIw+BJqBicOdWOjMPA21KrD6VXT45w6slnyY5rx/PgteF5cXMAkfAe+rtMujEajA6jasiMTMr9lMQfhYqx9zSPjTxxt0B9Zh4qA2I06l9xWafNFzdttfIML2JJJP4/lmrzyPh6Wwe2DJPcOVZXM4jO7M06ibz15ipmB6WYZAUYikbFWlfgwFBZdZ1WM9NqtpEoX18+SOsblVX8eDsLDTstJkbztI+lXPDuJhWkgGqYpyvTFQi9Vy4VkXLI4s7x1SNFxDOriGfKOVQSwqPg4vXf4VLciIIgivNljcHR6ccimrRGZzSBjTq6lsI9MQ9akjNWAqMBREcDcUrHXBJGLqUztBrz7M45Js0xHaI7Z7IESLWrb5zOoiEuG0nskrcibSIrA5hQrvBJWSBPtEA2mo5BkPTNMDdiZIJBMgx1HOrjKcefBGrCgBt0YSNIk2vYmd6zsfrup4E9ammE3bemgGn+5BBG5uQeceEHerDgmYXMcTy+OnrEV8F7GCpCSrTHs7jnzFee5PAZzAUvY+zEiOoJFq2HoXhPgZlHcKB6jEIKvuxfC9qDzEWimTlJ0gppcsu/S3gzDFOIh1B2G5ElmJEDuEVSZnhmNhKHdCqkwDIInpY1Z8Q4o7OWAsCSgJkKTvFR8zxZ8TD9W8MJkNsQRYHytXtYHmjGMXVefejxc/oylJq0/HtZVLRUSpGHhqygaQpFpGx7yOtF9REDcnYdT49BvP511vIl2cqxtvghup9lfaP8o6/l1oiYQUQPHvJ5knma7NZrDwQylpfoQbkix8OVtqXh+eGKQuhgYuY7Oq1gaj/UQbqzo9Ce3hcDdNPVan/2c7RpQkGYPK299qFmMk+GYdCvyPgRY03qwfCfJL0pLlpg0WpGBghmhjA6gSfKoYwtTtJawXZmHNuhpcfhiOAGLwL2dvzqc5PwPCMbVl1mOHquGrhzqa4UrymN9qDlyZqJkcsuEuhSxEk9pixk+NTcNajHco/U7KS2uX09Gc4wf/EMt4L83rSOKznGP/yOWHcvzetTipUoy5Z0ZI3FfBHFS8jgAtqaOzB0n7Q5ihYeHNQeOYTnsYeIqsFLgX1SsEDVIA1XuehoZJLawYots2mfzDpgqcsgdkIhJhdMGZY7R415fxr0oxcVmLAYTSQQjGGA7PagwWse6wqBmuIuBp9e5IJVgjNoCne0wxuRPOqR2gf7V5l0+D0/HJ6Z6HYyHLAnDYnU3aKsS0QJknui1rV1ef5fMuqgBwB0kV1N6jBsRfAUsUdUt+uprglfRWfOUAApwFG01wSs5IKTBTSrqOwPuBqblsuhN7+Nqt2ypFwAR4TXLm1UYOqOzDpZTVtlI/AsRlLNhKwgm+k2+tUj8IwCbLpP4SV+AtW7y2IyGChCnnfaicRy2DjFYhSOcDy8K5Y6uLdTSo6paWUV/bkzBpkGX2MfEHc+ll+N6MqZgfZw3HUMVPkQR8a2ycFQMI9WbXDA3+gqDxbg+hdaABRvBO52sapHUY5S2xbViSw5IxcpJOig/tbFgK+C6quxUKwt+6ZPlUx/SDCeANAbnr7JJ8Gg1Iy/DXdZVZA7xNRMxhrEOsrsQRI94p3GL8p0IptLpqw6LKg2v0NWCcJZkDKVadxsR571UZLhGAGmHQc/Vu6+7SDp9xFX39hYmkDL52eenFRWHcOxpNcmd7fsdmH6ld3+pETh7qQThlh+G5HjFdiMkxEcoi9FfiGZwUbDxcFS49l8PEie8K4+vOqL9rbVL4eIp6wGN5P2CTyNbFDfzJ0DLPZxFWaFuF4WIh1jsXnSxERvPd415jxXKJhYpXDcMu4I2giVPjFb3J8RTYuAOYcFBfqHAmsX6UcNCOrpiK6PMEMCRpgEW2H5VLPj282Njybl1RVgyYmO/um9EzmA2E2l1IkSJsYM7iajYbxuNXdePG16XExAzT2vA7i3LurnLUSS7PLD7AUk8hpgLv8ACrTgGajMo2xcaCBF5K2A5TAHnVRgO4NiwBiYJ5C3lR8nmnw3VxdlmLCdotO1vLemjJxdoEopqj0nimSKaZAOoEkAiVAEktOwFR34W+kMEYqbggEiPEVRtmuwHfHILLq0sZksSeyAduV7ze9WHA/Ss4gKYhIsT2T+7C73Jk1249ZNOnRyT0kJdEhsE4ahmRu1ZBpMseQXqfyrJ5nirnFOqcMzpK2sAbCTt3mvROFZ/CTFGvFVnZYA9pURjdU8TEtux7oFZ709TLOGxcF01z2oiYWBCgRvPQ+6p59TKXZTFp4w65MlxPiJxTqe7C9gokzMyu/Kj5POsiuo3dgXBPtSL9TPhVO82tE7EyBapuEyKmotqfUsiLwJ5nl+ornxyd2Ua8Gz9F+KBuxiMdM2EkuJ6SB18uVanH4iuhsMqzgiBrIMHkdvrXlXD86waQBBEaoA0xpghosBArdcKxHdSzkFQAQ20iJMjkRz8RXXiUZ8vtHPmclwuiPhp/eOPwp83qWqUzCAOK5GxTDI95epYSutzOP0wSpUnBwjTsPCmk4ln0yyB3BgmBHWJv3eFRnkKQxmX4wn/ieXHcnzete2DWAxeNDFzuBmGXSF0hgLjs6pP81bbJ8dTExQm2v2ZG4IkHVMHY+YqKn2dMocJEvDw6qPTDh04BxdaoEks2mXM6Qir7++tVi5YojPpkgEgWliNhXk/HuI5lywdnKMRKGYUjYQfZNjYVOeRNDwx0yhdib9TPvpShAkm8xBmdgZPn8KaN+g3/4rtfKZufHp9BXKXH6u8eVdUvJYmWCAYvrNd50xG9vhXVqMarh6Fkk37TjydgKkeoqpy3pImGjA4bn23EbhmxCdJ5bHlzrS5vNYKYIxwSyEKbASNUbjum/vr1Y6pdHlz00k7ILYQAkkDxpUwgbqQR1BkVjOL8YZ3bSx0SCJJMQZEdL1behudQOyEkTc6j2eV5POST4GkWruVFHpajZcPmsNWKloKxIgmLT0qxwy3IHaduR2qizyD12ORBBAg8vYXY86uMUf3KMTbsKZNoOkfWuLNqpKTTVnfh062ppli+I+HgvivhtCKTcXPSBvWbX0sA0ThsHadSk+yoJEyRc2Nht1qt9Js0+jQruygjZjpAuCLGP+azYxnmVJ2gdQCZIqUcj7oeSXVmtzvpNjB1bDfsOYAZEMALPMTuOtXWW9LExcFRiDtrqDBQYMWkQLTAtWHRtYwSDHbIEgTuRJqbkTCMfuu8xzg1dcNSIzbSouct6QYqM5CKEnsyYOnqZmDtVbnuPYmIzKQF5jRMsB7XtCJAgkRUfOY2sFFCyRJDhvZOxBSagZrLufYZLTPa0mGKx7QHMUJTly/IqjxTLnIZ/1jwru0Ak3IHwjnVxg5/GSyuY6MFYfET8ayXo9nGDmdOkAFmJCxJiSxMRJ2q9y2e1tiAaCEEhlJIMluvhXNOc5c2VhFRRMw81iLrhgdbl21Am7CCovYWHlTn4ogddSkN2bLcQGsZMdTUHD4gDhtiFCNDEEAgm0Akbdai59wXRgDDBD3wxtPvimjqMmNVYJYoydsvXzWC2I3rSww0RW0tIGss4JOneyjfvrM+k+Wy6lHwCjK8+wBC6eRvI/2ruN58rjuojSUVSY7UhnMifE1ny/ZiTHf4mJ6mqPPKapoCxqL4ELW3PnRMLDxHVmQMVWNRB67d525VHDzzq74AQqOhNy6E9BvaetxWxrc6Y8nSKYvPOpOA6ggsNQEmNtR6SL0bjiw6wBLLJgRJkgExzqIJUrABI8pn4UZR2toy5QYlSZE2tJv7vjRVeIPMU3Ml00q4AYjWI5TIk99jUdn2vf9e6pj1RMXGKjUBP2T0joP1yqOuPBJJBPLn/xUR8xe0j8/Cn4GH6x1QEAswWYPOBMTvStNsnQQ4neTabET8aPluHYjsECEFti0xJsDMd++1Mfhrq+iBN4MwGHI79knoau+DZzQmIqwHtodjDgj7Kn7p+gopUzAOKB0IwiyMp0vCAAB40sLGJtciJqw9F8xrZMLEYKgvd9PZBBcEzJBtY7xWfzOOztqclm+825AtvRchmQjBikqCNRvJE+z79vA08ZtMG1M9jyPqzjPo0lGwsIAlYWNeOJg3iwuKfnMokroAkCGA2kbEViOFemiqz4mOGbUmhAg2KFmUMOQ7Zq9Ppnljhs6OwxFUEKyMJa1gbjr7qdT2u7A4pqqLVlVEZ3kKok2JMDuFebelPHXxXKK7KgkaCFjfnF5sK3Gb9MsliYGKut1LKyCUOs6gQGW8Ec968mZBqI1ahJvsT7q0sjaNGCQVD2Q3Qn4Vapx90dMTDVUxEEEwGUgXU6WmCBbfnVatkEctVR8RpvQk2kqGXJ6Dhen74uEcPEQMXQKSW09qxJ7I2981iuI8ROKFW4VWaBMgAnYEiTzuTTuFGGDMjlNgVNwTYETvflUXMs2p9U6p2O99tqnTSDu5ob7NhHKTuaYzweRI6gEbc5tXIbXt060hEkzEfryrIw8Qb6R8vhNdUbEcTvXUwC1XizIQNCkkap1MIDy0DumaIeOjYoCD0aPddag5vLOSpVZGlQDsJBCnfvYVE/ZXZ9IXtQWgwJCkgxO5sfKmbkmbhlz/bGHq0tlwTMGShn36RUnLYyawowGRjaYWNucN3dKpcPEdPWAJ2cVWEtMECbjz+FWPAcE6XZwdSkadW4GkbX76ybbRkkWWNnGOIUUBVUwVInXe/hPdVfm80ryn7S50groYNphSeUAGDzPSrvMZOcVHUCJ7XWxkVlGyzh8VisKTiQZF5LRaaacV5MrS4YJ1ZVgNKnoffccq7L4xDCCRAIB91I7DSSgMQtydjAn4zQ8n/1EBWRqjeBfv2qKQSdlsYjCwu5yfIn8qnZHGHqDMjW7gHlMzE9b1VF9Kqpnss2+8S0VNw8qNwHEyRd4E8wNEVfmkJVkhlAIKlJjtSRz33/AFenuiAFhBJt7QuJuN70Eo9jL2tPa26exShG6t/P/TRsbaQMtlwXAGIqKe0jGIaORBsDIvPQ1ocqMNUdPWKrkRqOIjSN5GmLSTY1W+rMbGPB/wAqQIRO/wDC5+tc8sN9MKdF5lEwQnqziI8+12hLE9YNQ+KMgYBWAARQsGbgnSPgKrXx9LIDADbtpa3S2q9OXGJ9k8z9nl73pXgvhsayvz+M+JiszKZPcYG8CYqI2A5+w/8ACav/AF7/AHv9A+b005g/fH8WD/UassaFKjLZVwwY4b72EfG9WmRWNQ9WyqShgqTsZYnQDel/aP8A+g/jwB9DRcDFJNnnwdD/AKEmmS2mIPG3XWkHZbyDIlthYTUJ+n63qfx7GnQupiwOrckRsbk7/wCEVXlbzt42N9t6Hds3XRaLho6IzMrtAB1vEDpuOdKuBhRf1IMWGvnP73SoGAkqdrEfWjDBgA2i/XrQasG6g5wcHmMv/F30/BXAVgW9UsfaU3Bjl08aEmWBXtGP11NWnCQiKwiSTIMFgLR0oNVzRovc6MtjYgbEY6rajBF5E28akNiCB2Y7MHs9/wADWpObQT2hXft6ba/gfypOLspsMn9kH7JMC8xS4eJ0knoAST7q1gzafe+Bpf2tPvHyNBr2NsXuZ7LYDOoQdlgzGHkSNKDp+oNAcxIJB0kiRMHe4PStN+1p1PkajcQVcVVWWADAmBcwDYSQKNbuKA4peSiGIsQY7vjQmczAExE1bYGVRSzerYs1tJUFQBzn7xpi5VtBAwrn7RAB6fIU7xtCWiMF/uR36/hURqtHwGVEXRfU/Z8RMVGbh2MdkIkdRFNJPil4NFkvIn+6Q9G/7jUHiJjEffZfD2RU7LZbEVAmiADYyN9Ux8/Ko2d4fis5fQBMCNQ6ACmkm41QPJBZx1jp+hS4QJHZBJJ2EybSdqMeEY33B/EKkZXh2OjAgJIncg3IjpSLHL2DuKhyJrqn/wBj4nRem/S30rq3py9mDcgmYyrvpOs+ztMX5+ZomFh6dLGCyAgGepvaD1PnVh6/CiyjwKkfnSnNpawFx8/CnasYrXcNAbUQNrjpHSj5XNaG3Og+1MHYQKslzGGftJ7/APigYeYRoGmT4UKRi2/bsObOpiNpPPurOLlUYsyMdbMTAiCrMZIkT8asAh1N2SLKLiOd/nThkxq1AC3h5+NM3fYEkQV4UvU+S0zEygV1CjEZ9NiSsaR47RVqikAAtqI3NhN+gNATDhyxOy6VAgaQTfnc2pNqCU+alHhlEwI1KGaD1OqP+aTGWER2VSHkCwO3dNvOpfFMhrYuXiSgiBzKpMz3zQs9kUw8PsyZdSSY6nYA23rbUbc0VuPmQDZF2B2gz7jtRsbGUr2cNEMbgk3/AMRqHnhDDY9kb94NFXlRilbRnJ9j0RipMgeyNrX8AKnZDDWSGGGREz6tS0yBfUKGiCCO9diJ37iakZfDCmRMkRczaZp4QfaGc4qLT7Jfqk5QB/6aD6UDM4CgCw9oiQFUxCkTCnrUlD1E/rupmOJ6jt8tX3F+6y1WUUkTjKyMiDp8f/jpwUd/8Tf0UUYR/F5P/XS+rM7N5Yn9dRGGqvj/ABv9EqRgEAEsYXnqLkfzgD4HwoQwj0b+HE/roOcw+zEb2upHLq7E+VYw3PYaYrqExE1RAUk3m+0dLz8BVUimD1VlB92qan5VD+0qwBgRcC3sR86gFx2o5vO/efzpXRqLHI4epWkgSQRcd/IG1SsXDRElnsOlzc2tUJM4ViADb7x+QpuJnMV4RUAZmEGTYzbcxFMpxS5JuLbLrLOhUCZttz7rcqcgCF2EkQIUmwveJBHwqMmFiYfYIACj2hszEzvzoOVxWL4is2xNunYFqEcsckbi7Mo1K0ye2IGuDAPU3/1ikH73x/8AfSZVjoSTeO/qfxCij3/zf70tFkxAD1Pmf6qVcOdy38TfnSx3HyP1SiJ+v1ApJ9DRBnCHU+ZpXMaR+L6GimoOTzi4gm6aWiDcbG88hT4HTdgnG+ETZ7qcrGoz5pQSsgxF1uL3+VOGZTr8D/xXTuj7nO4yRGzbH1i7x2vktWKPYeA+VVmdcalabCZPQET9KkDPoY03FqCkk+TbX4JOIxt+8K7H2H7y/Ooj5ufs8wfKkbPsbaDEg2jkZ5xW3IO0lljSajUJs052SPGPzpGxXPOPdVXljQvpssMBbe8/M11VevF++v8ACfzpaj6n2G9Mi0lEYChyKmUOvTCg5jyt8qcYp/qz0NYwJVjYt/EaVbbM38R/OnFDzge8UxiOvkPzihRggxn++/maeuYcXDmec3npNAmu1e+twYLj5pypBdSJU7Dk6kfKuz2O7owfTaDYX9oUHEfsn3fMUZBKmQNwL+fUfOsuwMpc+O0LH2V+o+hpyH2fEfOl4vAxBFhoE6Y6t3nupqfZ8R86MXyzPpFmrb3m685+0PxGpCNUfmb/AHec/bX8RoyDuNXxrgWTJmH4ig5gC8x7f4fuL95TT8N45Gh45sY++Ov3B91loz6BF2DKJ+D/ACvqopdKfg/yacur8Xu9Z/UaJDfj/wAz8jXOUBAJ+D/I/OlXBDQFIgEE6dGw5HR9aKJ/H/mf0UfLzBmffq/7gKJiDxPGBVSJGpWsO6xmO+qfLpqBExsfnVxn0UW1RIeB4nl0qBw/C0sdTBZG9jee6lapmslsyfcIsNj50/AwQTqRHkTBIJHwpCE//aPI1A40o7Gl9Qh73HNbUHFOLTRrs0+fkoZB2n3gVVcKUDEJuQ8mGF7LF+tV3ArB9/s/901a5ZsJW1esJgbFTeeQ61HDiWK1HoEYOKonusWUGPfHwFJB6fD80pGdG7SkEHY/8rSAju/l+hFdARYHd5L/AEiiI36/4piz3+7V9GoifX9b1KfRSI8VlMriKWKFGJLGCD8x9a0uSx9aFiIhmX+ExNZrLZYlywYgAmYNzflG1bH5RpFoiE2CljP2ZmpWHlGOyEfvQKBl3MmpqZphaZHQ3q0YknIrDmNJiQGDdDN+6pnqnAkgwb7Wv3cqe+Omr/pJqJtN791L+2vy0r3Bfzmmq3QLrkju8cufKR1/Kn26kfH9eVdjYzNdmny+lcrA8x8juOtLJUwp2Lp6Eef511Iy7crj5ml01hjq6u011awFOeKPyAHgFH0oeJxHEI9ox428qjCkfanchNpdviPbtHcTFvlUTR25Y21bEk+6Kktt76iJuP3vqakxwo3P7x+tIPpT2+tNX6VmYQDelC0/r4/QUbLIDuJpRiNiodJP+3MUcIVB2knlv8pp7iLDamYlLuph22im423bXf2BvP3m6mmYTXXxHzHhRuLoJQxyjyqJhm6+IpovyK1Re6bn3bkkWYHeWjb40LLZ7U7AKNCjqJJmNyQI3qpOYZpJYk1Y8OQEXHLlb5VSM2ugUmWy4g30t7hPyJoeMSQSAbuNwfuR90/KomKgGw87/OhZXEJF/kO+qObkuRaS6JcdQPfo/wC5BTgF/D/lfmKnYWXWOfuZh8jTXw45t/E351IYquIYpULp0iSbgLNv3WND4djsXiTMNAHOxsZIFN4riHs35n5Cu4P/ANZf8X+lqy7Aw/E3JKBhLKBqINpPL9daSB0NBzO5P4x/qNEPP9c6D5YUPGjoPM0sDzoab09vaI7zSz6fwPj/ADL5CIwDEEgyg08iSNx3UJMdAwlI3kg3EiLihIu9SMISb3kUsOkNN/U19yyyywii+3f1PQ/SjX7/AOb6g1SYeacKADsIuAfnVS3FsaSNcX5BRz7hTpk2jXm/T+X8hXftCIe0wW/Os9l8Z39p3P8AjYfI1YJlU0yVBMi5ud++lkrGjwF4bnUVCpYatbmO4sYNQuGT24BbtG2632nnRMmg07faPzajcCaC4/F9KMVTZm7pBcJCCZXT3URTSmxK8gTA6T0pq1aL4JyVAsRJ6jw/V6kLmAfbT/Em/vU/Q+6hDeuoyxqXLBHI1wEXCDllwyWK3IIIt4G/woOLhlfaQjvFx+vKh4/sk8wbHmPCrT0fxTiOVxDqAHPf+Lf41yZXLG+7OiKjNWlRXqxjssY/591P9e3OD8/hUviOAoVoAF6g5VAYEU2GfqrjgSSof68dD/F/tSUVD4eQrqoKf//Z",
                "obj_type":10,
                "icon":"КПП"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6426,55.828
                ]
            }
        },{
            "type": "Feature",
            "id": "10004",
            "properties": {
                "text": "КПП Совхозный",
                "check":"false",
                "imageSrc":"data:image/jpeg;base64,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 ",
                "obj_type":10,
                "icon":"КПП"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6316, 55.8384
                ]
            }
        },{
            "type": "Feature",
            "id": "10005",
            "properties": {
                "text": "КПП Совхозный",
                "check":"false",
                "imageSrc":"data:image/jpeg;base64,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 ",
                "obj_type":10,
                "icon":"КПП"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6217, 55.8273
                ]
            }
        },{
            "type": "Feature",
            "id": "10006",
            "properties": {
                "text": "Арка Северного входа",
                "check":"false",
                "imageSrc":"data:image/jpeg;base64,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 ",
                "obj_type":10,
                "icon":"Вход"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.6374, 55.8307
                ]
            }
        },{
            "type": "Feature",
            "id": "10007",
            "properties": {
                "text": "Арка Южного входа",
                "check":"false",
                "imageSrc":"data:image/jpeg;base64,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 ",
                "obj_type":10,
                "icon":"Вход"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    37.630722868071516, 55.82668742180129
                ]
            }
        },

    ]
};