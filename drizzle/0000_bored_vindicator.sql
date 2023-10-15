CREATE TABLE `ChatMessages` (
	`id` text PRIMARY KEY NOT NULL,
	`sessionId` text NOT NULL,
	`type` text NOT NULL,
	`content` text NOT NULL,
	`role` text,
	`name` text,
	`additional_kwargs` text NOT NULL,
	FOREIGN KEY (`sessionId`) REFERENCES `Chats`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `Chats` (
	`id` integer PRIMARY KEY NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `Users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`comment` text
);
--> statement-breakpoint
CREATE INDEX `sessionIdIndex` ON `ChatMessages` (`sessionId`);