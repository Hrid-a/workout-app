import {  sql } from "drizzle-orm";
import { integer,  pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const genderEnum = pgEnum('gender', ['male', 'female']);
export const levelEnum = pgEnum('level', ['beginner', 'intermediate', 'advanced']);
// export const subscriptionStatus = pgEnum('subscription_status', [
//     'unpaid',
//     'past_due',
//     'incomplete_expired',
//     'incomplete',
//     'canceled',
//     'active',
//   ]);
  
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    clerkId: varchar('clerkId').unique().notNull(),
    user_name: varchar('user_name').notNull(),
    age: integer('age'),
    gender: genderEnum('gender'),
    height: integer('height'),
    weight: integer('weight'),
    goal: text('goal'),
    level: levelEnum('level').default('beginner'),
    historicalInjuries: text('historicalInjuries'),
    createAt: timestamp('createAt').notNull().default(sql`now()`),
});

export const programs = pgTable('programs', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    description: text('description'),
    durationInDays: integer('durationInWeeks').notNull(),
    createdAt: timestamp('createdAt').notNull().default(sql`now()`),
    userId: integer('user_id').references(()=> users.id, {onDelete: 'cascade'}).notNull(),
});

 
export const programSessions = pgTable('program_sessions', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    description: text('description'),
    dayNumber: integer('dayNumber').notNull(),
    duration: timestamp('duration').notNull(),
    createdAt: timestamp('createdAt').notNull().default(sql`now()`), 
    programId: integer('program_id').references(()=> programs.id, {onDelete: 'cascade'}).notNull(),
    // programId
}); 

export const exercises = pgTable('exercises', { 
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    description: text('description'),
    muscle_group: varchar('muscle_group').notNull(),
    programSessionId: integer('program_session_id').references(()=> programSessions.id, {onDelete: 'cascade'}).notNull(),
    // workoutSessionId
});

export const exerciseDetails = pgTable('exercise_details', {
    id: serial('id').primaryKey(),
    sets: integer('sets').notNull(),
    reps: integer('reps').notNull(),
    weight: varchar('weight'),
    restTime: integer('restTime').notNull(),
    exerciseId: integer('exercise_id').references(()=> exercises.id, {onDelete: 'cascade'}).notNull(),
    // exerciseId
});

// export const subscriptions = pgTable('subscriptions', {
//     id: text('id').primaryKey().notNull(),
//     userId: integer('user_id').references(()=>users.id).notNull(),
//     status: subscriptionStatus('status'),
//     metadata: jsonb('metadata'),
//     // priceId: text('price_id').references(() => prices.id),
//     quantity: integer('quantity'),
//     cancelAtPeriodEnd: boolean('cancel_at_period_end'),
//     created: timestamp('created', { withTimezone: true, mode: 'string' })
//       .default(sql`now()`)
//       .notNull(),
//     currentPeriodStart: timestamp('current_period_start', {
//       withTimezone: true,
//       mode: 'string',
//     })
//       .default(sql`now()`)
//       .notNull(),
//     currentPeriodEnd: timestamp('current_period_end', {
//       withTimezone: true,
//       mode: 'string',
//     })
//       .default(sql`now()`)
//       .notNull(),
//     endedAt: timestamp('ended_at', {
//       withTimezone: true,
//       mode: 'string',
//     }).default(sql`now()`),
//     cancelAt: timestamp('cancel_at', {
//       withTimezone: true,
//       mode: 'string',
//     }).default(sql`now()`),
//     canceledAt: timestamp('canceled_at', {
//       withTimezone: true,
//       mode: 'string',
//     }).default(sql`now()`),
//     trialStart: timestamp('trial_start', {
//       withTimezone: true,
//       mode: 'string',
//     }).default(sql`now()`),
//     trialEnd: timestamp('trial_end', {
//       withTimezone: true,
//       mode: 'string',
//     }).default(sql`now()`),
//   });