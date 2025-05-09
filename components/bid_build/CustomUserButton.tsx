'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

const CustomUserButton = () => {
  const { user, isLoaded } = useUser();
  const [editing, setEditing] = useState(false);
  const [institutionInput, setInstitutionInput] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  if (!isLoaded || !user) return null;

  const currentInstitution = (user.publicMetadata?.institution as string) || 'Not set';
  const inputValue = institutionInput ?? currentInstitution;

  const handleSave = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || trimmed === currentInstitution) return;

    setIsSaving(true);
    try {
      const res = await fetch('/api/update-institution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          institution: trimmed,
          userId: user.id, 
        }),
      });

      const result = await res.json();
      if (result.success) {
        await user.reload(); 
        setInstitutionInput(null);
        setEditing(false);
      } else {
        console.error(result.error);
      }
    } catch (err) {
      console.error('Failed to update institution:', err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action label="Institution" labelIcon={<FaGraduationCap />} open="institution" />
      </UserButton.MenuItems>

      <UserButton.UserProfilePage label="Institution" url="institution" labelIcon={<FaGraduationCap />}>
        <div style={{ padding: '1.5rem', fontFamily: 'Segoe UI, sans-serif' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
            Institution Details
          </h2>

          {editing ? (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInstitutionInput(e.target.value)}
                placeholder="Enter institution name"
                autoFocus
                style={{
                  padding: '0.5rem',
                  fontSize: '1rem',
                  width: '100%',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  marginBottom: '1rem',
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  {isSaving ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={() => {
                    setEditing(false);
                    setInstitutionInput(null);
                  }}
                  disabled={isSaving}
                  style={{
                    backgroundColor: '#ccc',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
                {currentInstitution}
              </p>
              <button
                onClick={() => {
                  setInstitutionInput(currentInstitution);
                  setEditing(true);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}
              >
                <FiEdit style={{ marginRight: '0.5rem' }} />
                Edit Institution
              </button>
            </>
          )}
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
};

export default CustomUserButton;
