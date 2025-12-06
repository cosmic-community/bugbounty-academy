// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Learning Module types
export interface LearningModule extends CosmicObject {
  type: 'learning-modules';
  metadata: {
    module_title: string;
    difficulty_level?: {
      key: 'beginner' | 'intermediate' | 'advanced' | 'expert';
      value: string;
    };
    category?: {
      key: string;
      value: string;
    };
    description?: string;
    content?: string;
    estimated_time?: string;
    prerequisites?: string;
    learning_objectives?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Lab Exercise types
export interface LabExercise extends CosmicObject {
  type: 'lab-exercises';
  metadata: {
    exercise_title: string;
    vulnerability_type?: {
      key: string;
      value: string;
    };
    difficulty?: {
      key: 'easy' | 'medium' | 'hard';
      value: string;
    };
    vulnerable_code?: string;
    exploitation_steps?: string;
    remediation?: string;
    cvss_score?: string;
    related_module?: LearningModule;
    tools_required?: Tool[];
  };
}

// Tool types
export interface Tool extends CosmicObject {
  type: 'tools-scripts';
  metadata: {
    tool_name: string;
    category?: {
      key: string;
      value: string;
    };
    description?: string;
    installation_guide?: string;
    usage_examples?: string;
    source_code?: string;
    official_website?: string;
    github_repo?: string;
    is_free?: boolean;
  };
}

// Bug Bounty Program types
export interface BugBountyProgram extends CosmicObject {
  type: 'bug-bounty-programs';
  metadata: {
    program_name: string;
    platform?: {
      key: string;
      value: string;
    };
    program_url?: string;
    scope?: string;
    out_of_scope?: string;
    minimum_bounty?: string;
    maximum_bounty?: string;
    tips_strategies?: string;
    program_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Writeup types
export interface Writeup extends CosmicObject {
  type: 'writeups';
  metadata: {
    writeup_title: string;
    vulnerability_type?: {
      key: string;
      value: string;
    };
    severity?: {
      key: string;
      value: string;
    };
    bounty_amount?: string;
    target_program?: BugBountyProgram;
    discovery_process?: string;
    exploitation_details?: string;
    impact_analysis?: string;
    screenshots?: Array<{
      url: string;
      imgix_url: string;
    }>;
    lessons_learned?: string;
  };
}

// Learning Path types
export interface LearningPath extends CosmicObject {
  type: 'learning-paths';
  metadata: {
    path_name: string;
    description?: string;
    target_audience?: {
      key: string;
      value: string;
    };
    estimated_duration?: string;
    modules?: LearningModule[];
    lab_exercises?: LabExercise[];
    path_icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}