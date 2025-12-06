import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for handling Cosmic API errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all learning modules
export async function getLearningModules() {
  try {
    const response = await cosmic.objects
      .find({ type: 'learning-modules' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects || [];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch learning modules');
  }
}

// Fetch single learning module by slug
export async function getLearningModule(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'learning-modules', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch learning module');
  }
}

// Fetch all lab exercises
export async function getLabExercises() {
  try {
    const response = await cosmic.objects
      .find({ type: 'lab-exercises' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects || [];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch lab exercises');
  }
}

// Fetch single lab exercise by slug
export async function getLabExercise(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'lab-exercises', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch lab exercise');
  }
}

// Fetch all tools
export async function getTools() {
  try {
    const response = await cosmic.objects
      .find({ type: 'tools-scripts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects || [];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch tools');
  }
}

// Fetch single tool by slug
export async function getTool(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'tools-scripts', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch tool');
  }
}