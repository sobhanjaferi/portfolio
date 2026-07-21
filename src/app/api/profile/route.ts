import { NextResponse } from "next/server";

export interface itemType {
  content: string;
  title: string;
}

export interface profileType {
  profileImg: string;
  name: string;
  jobTitle: string;
  email: itemType;
  phone: itemType;
  location: itemType;
  linkedin: string;
  github: string;
  emailLink: string;
  telegram: string;
}

const profileData: profileType = {
  name: "Sobhan Jafari",
  jobTitle: "Front end Developer",
  profileImg: "/images/profile.jpeg",
  linkedin: "https://www.linkedin.com/in/sobhan-jafari-681301396/",
  github: "https://github.com/sobhanjaferi",
  emailLink: "https://mail.google.com/mail",
  telegram: "https://web.telegram.org/@sot837",

  email: {
    title: "email",
    content: "sobhanjafarii87@gmail.com",
  },

  phone: {
    title: "phone",
    content: "+98 993 916 0928",
  },

  location: {
    title: "location",
    content: "Alborz , Karaj , Meshkindasht",
  },
};

export async function GET(): Promise<Response> {
  return new NextResponse(JSON.stringify(profileData), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
