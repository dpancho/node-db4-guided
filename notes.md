# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## a good data model

- captures ALL the info the system needs
- captures ONLY the info the needs
- reflect reality (POV of the system)
- is flexible, can evolve with the system
- guarantees `data integrity`
- is driven by the way we access data

## Components

- entities (nouns: zoo, animal, species), like a resource ---> tables
- properties ---> columns or fields
- relationships ---> Foreign Keys

## Workflow

- identify entities
- identify the properties
- identify relationships

## Relationships

- 1 to 1
- 1 to many : most common
- many to many: this is smoke and mirrors

_there are many animals to one species_

## Mantras 

- every table must have a `PRIMARY KEY`
- work on 2 or 3 entities at a time
- **one to many** relationships are modeled using **Foreign Key**
- the **Foreign Key** always goes in the **many** side
- the **Foreign Key Column** must be the same type as the **Primary key** it references 
- **many to many** relationships are modeled using a third table
- the 3rd table could include columns? 