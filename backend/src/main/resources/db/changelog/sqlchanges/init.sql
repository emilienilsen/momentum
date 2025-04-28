create table app_user
(
    id     uuid primary key not null,
    name   varchar(255),
    email  varchar(255),
    mobile integer,
    role   varchar(255)
);

create table exercise
(
    id uuid not null primary key,
    name        varchar(255),
    description varchar(255)
);

create table workout
(
    id           uuid not null primary key,
    category     varchar(255),
    trainer_id   uuid,
    level        varchar(255),
    title        varchar(255),
    exercise_id uuid,
    duration     integer,
    date timestamp,
    foreign key (exercise_id) references exercise (id),
    foreign key (trainer_id) references app_user (id)
);


create table workout_exercise
(
    workout_id  uuid,
    exercise_id uuid,
    reps        integer,
    sets        integer,
    foreign key (workout_id) references workout (id),
    foreign key (exercise_id) references exercise (id)
);



