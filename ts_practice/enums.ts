// enum PrintMedia {
//     Newspaper=1,
//     Newsletter,
//     Magazine,
//     Book
//   }

//   console.log(PrintMedia.Newsletter);
  
// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
// }

// function getMedia(mediaName: string): PrintMedia {
//     if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
//         return PrintMedia.Magazine;
//     }
//     return 0;
//  }

// let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
// console.log(mediaType);

enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}
console.log(Status);
