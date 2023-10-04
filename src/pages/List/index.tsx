import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonToast,
  useIonViewWillEnter,
} from "@ionic/react";
import { addOutline, trashBinOutline } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import "./List.css";
const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<any[]>([{
    "gender": "male",
    "name": {
    "title": "Mr",
    "first": "Dragutin",
    "last": "Pejaković"
    },
    "location": {
    "street": {
    "number": 8943,
    "name": "Dvadesetdevetog Novembra"
    },
    "city": "Pančevo",
    "state": "Zaječar",
    "country": "Serbia",
    "postcode": 35574,
    "coordinates": {
    "latitude": "59.5928",
    "longitude": "-73.8743"
    },
    "timezone": {
    "offset": "+9:00",
    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
    }
    },
    "email": "dragutin.pejakovic@example.com",
    "login": {
    "uuid": "48de39f4-693d-4402-ab98-b0204ca91460",
    "username": "purpleleopard744",
    "password": "planes",
    "salt": "yJnYpcjN",
    "md5": "9ade1b2144176a5efbae60879a6e346f",
    "sha1": "f9dc94ef4fdbcbd3c0e7c917e514ec0ecd4a9dbf",
    "sha256": "93b59fde1e155cfd01a950262454397ce84a919ba1829a97c8cfa4717959eb05"
    },
    "dob": {
    "date": "1946-12-22T10:47:04.413Z",
    "age": 76
    },
    "registered": {
    "date": "2005-08-21T16:39:03.438Z",
    "age": 18
    },
    "phone": "017-6512-307",
    "cell": "068-6684-320",
    "id": {
    "name": "SID",
    "value": "427830354"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/1.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
    },
    "nat": "RS"
    },
    {
    "gender": "male",
    "name": {
    "title": "Mr",
    "first": "Jaime",
    "last": "Alonso"
    },
    "location": {
    "street": {
    "number": 8110,
    "name": "Calle de Arganzuela"
    },
    "city": "Vigo",
    "state": "País Vasco",
    "country": "Spain",
    "postcode": 29253,
    "coordinates": {
    "latitude": "53.3245",
    "longitude": "119.9177"
    },
    "timezone": {
    "offset": "+8:00",
    "description": "Beijing, Perth, Singapore, Hong Kong"
    }
    },
    "email": "jaime.alonso@example.com",
    "login": {
    "uuid": "bad75316-3cc6-4059-a528-0dc5fe3c37f7",
    "username": "blackelephant897",
    "password": "easton",
    "salt": "WpE9BrMg",
    "md5": "32911355851e101b0b08bf218515415f",
    "sha1": "d53d08da02118c02b1eaba2dd105fc7bb00fef2f",
    "sha256": "84831f328f9d8286d0e3acddfda42dfab9fbfcbc87088887c559511c5ffe5e68"
    },
    "dob": {
    "date": "1972-08-23T12:23:43.320Z",
    "age": 51
    },
    "registered": {
    "date": "2010-09-29T05:49:59.296Z",
    "age": 12
    },
    "phone": "951-914-315",
    "cell": "605-951-364",
    "id": {
    "name": "DNI",
    "value": "58074779-S"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/46.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/46.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/46.jpg"
    },
    "nat": "ES"
    },
    {
    "gender": "female",
    "name": {
    "title": "Mrs",
    "first": "Roberta",
    "last": "Green"
    },
    "location": {
    "street": {
    "number": 7810,
    "name": "Blossom Hill Rd"
    },
    "city": "Toowoomba",
    "state": "Western Australia",
    "country": "Australia",
    "postcode": 6324,
    "coordinates": {
    "latitude": "-37.8882",
    "longitude": "44.2177"
    },
    "timezone": {
    "offset": "+4:00",
    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
    }
    },
    "email": "roberta.green@example.com",
    "login": {
    "uuid": "1523e767-81f2-4651-818f-916a78e0b6bc",
    "username": "yellowpeacock618",
    "password": "wutang",
    "salt": "axe6gGa9",
    "md5": "e8863f9fe3c1c75ea465412d03ce15b8",
    "sha1": "904eafbbbb49d3de968caba088f187c3c5fe4321",
    "sha256": "4922f45813115e9814a3b0bb09ec4651f1c835e5dd71596cbaee9608f369a018"
    },
    "dob": {
    "date": "1947-07-11T04:29:00.894Z",
    "age": 76
    },
    "registered": {
    "date": "2006-08-22T08:51:17.135Z",
    "age": 17
    },
    "phone": "01-1246-4270",
    "cell": "0484-281-694",
    "id": {
    "name": "TFN",
    "value": "449396190"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/3.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
    },
    "nat": "AU"
    },
    {
    "gender": "female",
    "name": {
    "title": "Miss",
    "first": "Veronica",
    "last": "Reed"
    },
    "location": {
    "street": {
    "number": 427,
    "name": "E Center St"
    },
    "city": "Salt Lake City",
    "state": "Texas",
    "country": "United States",
    "postcode": 57311,
    "coordinates": {
    "latitude": "86.4468",
    "longitude": "74.9441"
    },
    "timezone": {
    "offset": "+1:00",
    "description": "Brussels, Copenhagen, Madrid, Paris"
    }
    },
    "email": "veronica.reed@example.com",
    "login": {
    "uuid": "0bc569c0-dee0-451e-980f-ffc90303247a",
    "username": "happyostrich299",
    "password": "trojan",
    "salt": "a8hY5ERo",
    "md5": "33bd51854d572f010dad431336b72281",
    "sha1": "d7585b0d7cb3aa761cccb6ddea20fa10c045faf6",
    "sha256": "6b14d226c28d150b45fc8554bf6ab96a31c7f330f71dee5b217e122f49603d5d"
    },
    "dob": {
    "date": "1982-05-11T05:50:02.795Z",
    "age": 41
    },
    "registered": {
    "date": "2005-06-25T02:52:33.378Z",
    "age": 18
    },
    "phone": "(749) 732-1701",
    "cell": "(501) 607-1135",
    "id": {
    "name": "SSN",
    "value": "253-25-9737"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/15.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/15.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/15.jpg"
    },
    "nat": "US"
    },
    {
    "gender": "male",
    "name": {
    "title": "Mr",
    "first": "Ekapad",
    "last": "Dalvi"
    },
    "location": {
    "street": {
    "number": 5159,
    "name": "Pali Hill"
    },
    "city": "Muzaffarnagar",
    "state": "Chhattisgarh",
    "country": "India",
    "postcode": 38005,
    "coordinates": {
    "latitude": "-11.3142",
    "longitude": "-107.7349"
    },
    "timezone": {
    "offset": "-3:00",
    "description": "Brazil, Buenos Aires, Georgetown"
    }
    },
    "email": "ekapad.dalvi@example.com",
    "login": {
    "uuid": "b0d74d2a-f766-4f6e-a1f0-9fbfb4702cd8",
    "username": "yellowmeercat836",
    "password": "mmmmm",
    "salt": "f3WMCAGE",
    "md5": "33d67952bf4323c646d74fd74e101905",
    "sha1": "8e5ac52d4cd4a9e625af342022870fa799f9548c",
    "sha256": "039ddcbe530e367c3a69bd16d6682295607e041970a663aff1856d88f3b4470d"
    },
    "dob": {
    "date": "1976-10-24T19:58:23.412Z",
    "age": 46
    },
    "registered": {
    "date": "2013-01-23T20:20:33.057Z",
    "age": 10
    },
    "phone": "7255209761",
    "cell": "9668003637",
    "id": {
    "name": "UIDAI",
    "value": "334382788899"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/19.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
    },
    "nat": "IN"
    },
    {
    "gender": "female",
    "name": {
    "title": "Miss",
    "first": "Maëlle",
    "last": "Roussel"
    },
    "location": {
    "street": {
    "number": 7572,
    "name": "Rue Laure-Diebold"
    },
    "city": "Limoges",
    "state": "Ille-et-Vilaine",
    "country": "France",
    "postcode": 99825,
    "coordinates": {
    "latitude": "-89.5967",
    "longitude": "165.0263"
    },
    "timezone": {
    "offset": "+3:00",
    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
    }
    },
    "email": "maelle.roussel@example.com",
    "login": {
    "uuid": "1de7b3e6-a3a2-42b6-bb53-2c0270290b22",
    "username": "tinyostrich799",
    "password": "short",
    "salt": "vHgNTGGn",
    "md5": "ecaa70143f8c1e1545a9771f4340ba63",
    "sha1": "bbe5c65d5fa276774e751033dbd19bace5b9ca86",
    "sha256": "ba7fc4612e3925957b3c84d8a063cdf1881f6d1af63ff3f80a33aff12b2d7d86"
    },
    "dob": {
    "date": "1996-06-17T19:09:24.073Z",
    "age": 27
    },
    "registered": {
    "date": "2005-06-30T19:24:57.144Z",
    "age": 18
    },
    "phone": "05-22-22-25-07",
    "cell": "06-14-45-85-92",
    "id": {
    "name": "INSEE",
    "value": "2960552407281 05"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/9.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
    },
    "nat": "FR"
    },
    {
    "gender": "female",
    "name": {
    "title": "Miss",
    "first": "Saheli",
    "last": "Dawangave"
    },
    "location": {
    "street": {
    "number": 6614,
    "name": "Tilak Marg"
    },
    "city": "Malegaon",
    "state": "Puducherry",
    "country": "India",
    "postcode": 84221,
    "coordinates": {
    "latitude": "-34.2730",
    "longitude": "20.1340"
    },
    "timezone": {
    "offset": "-3:00",
    "description": "Brazil, Buenos Aires, Georgetown"
    }
    },
    "email": "saheli.dawangave@example.com",
    "login": {
    "uuid": "38639ec5-b815-4358-aa24-1eca76879f9d",
    "username": "lazyladybug104",
    "password": "normal",
    "salt": "9HEq4svO",
    "md5": "0c8d8db9c5351e252cc1c7d2f06a62f9",
    "sha1": "f11e21646cf1ece5bd3e8415a1518b5425ee83fd",
    "sha256": "ca151fe9e47d4bae4d5fe638440585287e3c49ce8b8f776bfef6f77af241d745"
    },
    "dob": {
    "date": "1952-07-21T19:15:26.307Z",
    "age": 71
    },
    "registered": {
    "date": "2015-07-30T22:22:28.533Z",
    "age": 8
    },
    "phone": "8024045497",
    "cell": "7138708766",
    "id": {
    "name": "UIDAI",
    "value": "821496718842"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/39.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
    },
    "nat": "IN"
    },
    {
    "gender": "female",
    "name": {
    "title": "Mrs",
    "first": "Yasemin",
    "last": "Bakırcıoğlu"
    },
    "location": {
    "street": {
    "number": 9538,
    "name": "Istiklal Cd"
    },
    "city": "Bingöl",
    "state": "Hatay",
    "country": "Turkey",
    "postcode": 65237,
    "coordinates": {
    "latitude": "12.0086",
    "longitude": "13.5461"
    },
    "timezone": {
    "offset": "-5:00",
    "description": "Eastern Time (US & Canada), Bogota, Lima"
    }
    },
    "email": "yasemin.bakircioglu@example.com",
    "login": {
    "uuid": "3039930f-ba2f-4bbe-806a-5c5574d4bede",
    "username": "sadpeacock282",
    "password": "gabber",
    "salt": "z6khOOLe",
    "md5": "4ab56505e427d68878d481273153d670",
    "sha1": "db01f7d608140375995adc59aeb2da81c9fd0bc1",
    "sha256": "a6a80114677c85cabbd5334dc958bf3fcc95e9e48abda6e347de15dba9b70fd5"
    },
    "dob": {
    "date": "1998-12-12T18:48:49.272Z",
    "age": 24
    },
    "registered": {
    "date": "2015-11-05T04:22:08.586Z",
    "age": 7
    },
    "phone": "(234)-684-2582",
    "cell": "(813)-859-9134",
    "id": {
    "name": "",
    "value": null
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/92.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
    },
    "nat": "TR"
    },
    {
    "gender": "female",
    "name": {
    "title": "Mrs",
    "first": "Nia",
    "last": "Farias"
    },
    "location": {
    "street": {
    "number": 6358,
    "name": "Rua Das Flores "
    },
    "city": "Castanhal",
    "state": "Mato Grosso do Sul",
    "country": "Brazil",
    "postcode": 70602,
    "coordinates": {
    "latitude": "80.1126",
    "longitude": "156.0174"
    },
    "timezone": {
    "offset": "-4:00",
    "description": "Atlantic Time (Canada), Caracas, La Paz"
    }
    },
    "email": "nia.farias@example.com",
    "login": {
    "uuid": "6ece58ce-77f5-481a-b883-ceace21f3433",
    "username": "purplerabbit363",
    "password": "chavez",
    "salt": "KydsFFYL",
    "md5": "a822f7b1d2c13733774f2a45fb019301",
    "sha1": "8d48beb90cdb3b04494e495788a7fc7bb97a9c5a",
    "sha256": "70c82be67af64a69dc5d87b74e5de5a41c77d326f62ef18968c5849f6f910ae7"
    },
    "dob": {
    "date": "1982-04-18T18:20:16.212Z",
    "age": 41
    },
    "registered": {
    "date": "2011-11-10T22:51:01.486Z",
    "age": 11
    },
    "phone": "(12) 4016-1529",
    "cell": "(77) 8092-6948",
    "id": {
    "name": "CPF",
    "value": "795.264.104-39"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/83.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
    },
    "nat": "BR"
    },
    {
    "gender": "female",
    "name": {
    "title": "Miss",
    "first": "Afaf",
    "last": "Habets"
    },
    "location": {
    "street": {
    "number": 854,
    "name": "Distelvinkenplein"
    },
    "city": "Schaijk",
    "state": "Drenthe",
    "country": "Netherlands",
    "postcode": "5567 RT",
    "coordinates": {
    "latitude": "-46.8773",
    "longitude": "14.9798"
    },
    "timezone": {
    "offset": "-4:00",
    "description": "Atlantic Time (Canada), Caracas, La Paz"
    }
    },
    "email": "afaf.habets@example.com",
    "login": {
    "uuid": "0b2779d9-f394-460c-bd28-aa445af9bdf8",
    "username": "yellowbear602",
    "password": "cosmo",
    "salt": "1cDBePc7",
    "md5": "1f7d066eb958b7f39ce1f005b3e8111c",
    "sha1": "26b39a4aae24e0017c771b4e5e9a5d6a036b80ce",
    "sha256": "508fd75eb0b53dd6c8cde06767b573892e3f1eefd3c65e55c95ba62b79573f03"
    },
    "dob": {
    "date": "1963-10-21T05:12:17.313Z",
    "age": 59
    },
    "registered": {
    "date": "2015-04-20T22:47:36.244Z",
    "age": 8
    },
    "phone": "(0207) 100037",
    "cell": "(06) 55429078",
    "id": {
    "name": "BSN",
    "value": "29502568"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/65.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
    },
    "nat": "NL"
    }]);
  const [showAlert] = useIonAlert();
  const [showToast] = useIonToast();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const modal = useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);
  const page = useRef(null);

  const [activeSegment, setActiveSegment] = useState<any>("details");

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  useIonViewWillEnter(async () => {
    const users = await getUsers();
    console.log("🚀 ~ file: List.tsx:10 ~ useIonViewWillEnter ~ users:", users);
    setUsers(users);
    setLoading(false);
  });

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=10");
    const users = await data.json();
    return users.results;
  };

  const clearList = () => {
    showAlert({
      header: "Confirm!",
      message: "Are you sure you want to delete all users?",
      buttons: [
        { text: "Cancel", role: "cancel" },
        {
          text: "Delete",
          handler: () => {
            setUsers([]);
            showToast({
              message: "All users deleted",
              duration: 2000,
              color: "danger",
            });
          },
        },
      ],
    });
  };

  const doRefresh = async (event: any) => {
    const data = await getUsers();
    setUsers(data);
    event.detail.complete();
  };

  return (
    <IonPage ref={page}>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
          <IonRefresherContent />
        </IonRefresher>

        <IonGrid fixed={false}>
          <IonRow>
            {loading
              ? [...Array(10)].map((_, index) => <SkletonLoader id={index} />)
              : users.map((user, index) => (
                  <IonCol
                    key={index}
                    sizeXl="3"
                    sizeLg="4"
                    sizeMd="6"
                    sizeSm="6"
                    sizeXs="12"
                  >
                    <IonCard onClick={() => setSelectedUser(user)}>
                      <IonCardContent className="ion-no-padding">
                        <IonItem lines="none">
                          <IonAvatar slot="start">
                            <IonImg src={user.picture.large} />
                          </IonAvatar>
                          <IonLabel>
                            {user.name.first} {user.name.last}
                            <p>{user.cell}</p>
                          </IonLabel>
                          <IonChip slot="end" color={"primary"}>
                            {user.nat}
                          </IonChip>
                        </IonItem>

                        <IonItem lines="none">
                          <IonLabel>
                            {user.email}
                            <p>Gender: {user.gender.toUpperCase()}</p>
                          </IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
          </IonRow>
        </IonGrid>

        <IonModal
          breakpoints={[0, 0.5, 0.8]}
          initialBreakpoint={0.5}
          ref={modal}
          isOpen={selectedUser !== null}
          onIonModalDidDismiss={() => setSelectedUser(null)}
        >
          <IonHeader>
            <IonToolbar color={"light"}>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Close
                </IonButton>
              </IonButtons>
              <IonTitle>
                {selectedUser?.name.first} {selectedUser?.name.last}
              </IonTitle>
            </IonToolbar>
            <IonToolbar color={"light"}>
              <IonSegment
                value={activeSegment}
                onIonChange={(e) => setActiveSegment(e.detail.value!)}
              >
                <IonSegmentButton value="details">Details</IonSegmentButton>
                <IonSegmentButton value="calendar">Calendar</IonSegmentButton>
              </IonSegment>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {activeSegment === "details" && (
              <IonCard>
                <IonAvatar slot="start">
                  <IonImg src={selectedUser?.picture.large} />
                </IonAvatar>
                <IonCardContent className="ion-no-padding">
                  <IonItem lines="none">
                    <IonLabel class="ion-text-wrap">
                      {selectedUser?.name.first} {selectedUser?.name.last}
                      <p>{selectedUser?.email}</p>
                    </IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            )}
            {activeSegment === "calendar" && <IonDatetime />}
          </IonContent>
        </IonModal>
      </IonContent>

      <IonModal
        ref={cardModal}
        trigger="card-modal"
        presentingElement={presentingElement!}
      >
        <IonHeader>
          <IonToolbar color={"success"}>
            <IonButtons slot="start">
              <IonButton onClick={() => cardModal.current?.dismiss()}>
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>Card Modal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>My card modal</p>
        </IonContent>
      </IonModal>

      {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton id="card-modal">
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab> */}
    </IonPage>
  );
};

export default List;

const SkletonLoader = ({ id }: { id: number }) => (
  <IonCard key={id}>
    <IonCardContent className="ion-no-padding">
      <IonItem lines="none">
        <IonAvatar slot="start">
          <IonSkeletonText />
        </IonAvatar>
        <IonLabel>
          <IonSkeletonText animated style={{ width: "150px" }} />
          <p>
            <IonSkeletonText />
          </p>
        </IonLabel>
        <IonChip slot="end" color={"primary"}></IonChip>
      </IonItem>
    </IonCardContent>
  </IonCard>
);
