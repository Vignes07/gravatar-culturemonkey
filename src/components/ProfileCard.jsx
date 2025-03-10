import React from "react";
import { User } from "lucide-react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="bg-gray-600 h-32"></div>
      <div className="px-4 py-5 sm:px-6 -mt-16">
        <div className="flex items-center">
          {profile.photo ? (
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 bg-gray-600"
              src={profile.photo}
              alt={profile.fullName || "User"}
            />
          ) : (
            <User
              size={50}
              color="white"
              className="bg-gray-600 rounded-full p-2"
            />
          )}

          <div className="ml-4 mt-16 sm:mt-24">
            <h3 className="text-2xl font-bold text-gray-900">
              {profile.displayName}
            </h3>
            <p className="text-sm font-medium text-gray-500">
              @{profile.username}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.email}
            </dd>
          </div>
          {profile.phone && (
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.phone}
              </dd>
            </div>
          )}
          {profile.location && (
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.location}
              </dd>
            </div>
          )}
          {profile.website && (
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Website</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  href={profile.website}
                  className="text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.website}
                </a>
              </dd>
            </div>
          )}
          {profile.bio && (
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.bio}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default ProfileCard;
