import React from 'react';

export interface WaitlistData {
  email: string;
  name?: string;
  source: string;
}

export interface WebhookResponse {
  success: boolean;
  message: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}