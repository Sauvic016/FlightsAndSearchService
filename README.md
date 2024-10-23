# Flights Service Documentation

## Overview

This is a microservice for handling flight-related CRUD operations. The service uses a MySQL database and is built using Node.js, Express, and Sequelize.

## Project Structure

The project is organized into the following directories:

- `src`: contains the source code for the service
- `src/models`: contains the database models for the service
- `src/repository`: contains the repository classes for interacting with the database
- `src/routes`: contains the route handlers for the service
- `src/config`: contains the configuration files for the service
- `src/index.js`: the entry point for the service

## Database Design

The database design is as follows:

- `City`: a table with columns for `id`, `name`, `created_at`, and `updated_at`
- `Airport`: a table with columns for `id`, `name`, `address`, `city_id`, `created_at`, and `updated_at`
- `Airplane`: a table with columns for `id`, `name`, `created_at`, and `updated_at`
- `Flight`: a table with columns for `id`, `airplane_id`, `departure_airport_id`, `arrival_airport_id`, `created_at`, and `updated_at`

## Database Relationships:

- Cities & Airports:

  - One city can have multiple airports (one-to-many)
  - Each airport belongs to exactly one city (many-to-one)

- Airplanes & Flights:

  - One airplane can operate multiple flights (one-to-many)
  - Each flight is operated by exactly one airplane (many-to-one)

- Airports & Flights:

  - Each flight must have exactly one departure airport (many-to-one)
  - Each flight must have exactly one arrival airport (many-to-one)
  - One airport can be the departure point for many flights (one-to-many)
  - One airport can be the arrival point for many flights (one-to-many)

## API Endpoints

The service exposes the following API endpoints:

- `GET /airports`: returns a list of all airports
- `GET /airports/:id`: returns a single airport by ID
- `POST /airports`: creates a new airport
- `PUT /airports/:id`: updates an existing airport
- `DELETE /airports/:id`: deletes an airport

- `GET /airplanes`: returns a list of all airplanes
- `GET /airplanes/:id`: returns a single airplane by ID
- `POST /airplanes`: creates a new airplane
- `PUT /airplanes/:id`: updates an existing airplane
- `DELETE /airplanes/:id`: deletes an airplane

- `GET /flights`: returns a list of all flights
- `GET /flights/:id`: returns a single flight by ID
- `POST /flights`: creates a new flight
- `PUT /flights/:id`: updates an existing flight
- `DELETE /flights/:id`: deletes a flight

## Environment Variables

The service uses the following environment variables:

- `PORT`: the port number to listen on
- `DB_HOST`: the hostname of the database server
- `DB_PORT`: the port number of the database server
- `DB_USER`: the username to use for database authentication
- `DB_PASSWORD`: the password to use for database authentication
- `DB_NAME`: the name of the database to use

## Installation

1. Clone the repository
2. Install dependencies: npm install
3. Set up environment variables
4. Run migrations: npm run migrate
