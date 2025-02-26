import md5 from "md5";
import { use } from "react";

export const fetchGravatarProfile = async (email) => {
  const hash = md5(email.trim().toLowerCase());
  try {
    const response = await fetch(`https://en.gravatar.com/${hash}.json`);
    if (!response.ok) {
      throw new Error("Gravatar profile not found");
    }
    const data = await response.json();

    const entry = data.entry[0];

    return {
      hash,
      displayName: entry.displayName,
      aboutMe: entry.aboutMe,
      currentLocation: entry.currentLocation,
      urls: entry.photos[0],
      phone: entry.phoneNumbers[0].value,
      email: entry.emails[0].value,
      username: entry.preferredUsername,
    };
  } catch (error) {
    console.error("Error fetching Gravatar profile:", error);
    return { hash };
  }
};
