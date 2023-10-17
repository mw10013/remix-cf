CREATE TABLE `AChatMessages` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`type` text NOT NULL,
	`content` text NOT NULL,
	`role` text,
	`name` text,
	`additional_kwargs` text NOT NULL,
	FOREIGN KEY (`session_id`) REFERENCES `AChats`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `AChats` (
	`id` integer PRIMARY KEY NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `ChatMessages` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`type` text NOT NULL,
	`content` text NOT NULL,
	`role` text,
	`name` text,
	`additional_kwargs` text NOT NULL,
	FOREIGN KEY (`session_id`) REFERENCES `Chats`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `Chats` (
	`id` integer PRIMARY KEY NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE INDEX `a_session_id_index` ON `AChatMessages` (`session_id`);--> statement-breakpoint
CREATE INDEX `session_id_index` ON `ChatMessages` (`session_id`);