import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { ProfileBar } from "../components/pofilesectiontap/ProfileBar";




describe("check when click user should move to profile",()=>{

    // Component renders with profile settings and sign out links
    test('should render profile settings and sign out links with correct text and paths', () => {
        const { getByText, getAllByRole } = render(
          <BrowserRouter>
            <ProfileBar />
          </BrowserRouter>
        );
  
        const links = getAllByRole('link');
        expect(links).toHaveLength(2);
  
        const profileSettingsLink = getByText('Profile Settings');
        expect(profileSettingsLink).toBeInTheDocument();
        expect(profileSettingsLink.closest('a')).toHaveAttribute('href', '/profile');
  
        const signOutLink = getByText('Sign Out'); 
        expect(signOutLink).toBeInTheDocument();
        expect(signOutLink.closest('a')).toHaveAttribute('href', '/profile');
      });

          // Component handles missing icon images gracefully
          test('should render links even when icon images fail to load', () => {
            const { getByText, getByTestId } = render(
              <BrowserRouter>
                <ProfileBar />
              </BrowserRouter>
            );
          
            // Use getByTestId to select the images by their test IDs
            const profileSettingsImage = getByTestId('profile-settings-icon');
            const signOutImage = getByTestId('signout-icon');
          
            // Trigger error events on the images
            fireEvent.error(profileSettingsImage);
            fireEvent.error(signOutImage);
          
            // Check that the links are still in the document
            const profileSettingsLink = getByText('Profile Settings');
            expect(profileSettingsLink).toBeInTheDocument();
          
            const signOutLink = getByText('Sign Out');
            expect(signOutLink).toBeInTheDocument();
          });
          

    // Links navigate to correct routes when clicked
    test('should navigate to correct routes when links are clicked', () => {
        const { getByText } = render(
          <BrowserRouter>
            <ProfileBar />
          </BrowserRouter>
        );
  
        const profileSettingsLink = getByText('Profile Settings');
        expect(profileSettingsLink.closest('a')).toHaveAttribute('href', '/profile');
  
        const signOutLink = getByText('Sign Out');
        expect(signOutLink.closest('a')).toHaveAttribute('href', '/profile');
      });


})


