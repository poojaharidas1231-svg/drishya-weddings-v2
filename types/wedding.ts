export interface WeddingStory {


  id:
    string;


  title:
    string;


  couple:
    string;


  location:
    string;


  date:
    string;


  category:
    WeddingCategory;


  coverImage:
    string;


  gallery:
    string[];


  filmUrl?:
    string;


  description:
    string;


  featured?:
    boolean;

}



export type WeddingCategory =

  | "Wedding"

  | "Destination"

  | "Pre Wedding"

  | "Engagement"

  | "Traditional"

  | "Editorial";



export interface Service {


  title:
    string;


  description:
    string;


  image?:
    string;


}