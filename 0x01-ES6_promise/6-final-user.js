import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userData, photoError] = await Promise.allSettled([userPromise, photoPromise]);
    
    return [
      { status: userData.status, value: userData.status === "fulfilled" ? userData.value : null },
      { status: photoError.status, value: photoError.status === "rejected" ? photoError.reason : null }
    ];
  } catch (error) {
    return [{ status: "error", value: error.message }];
  }
}
