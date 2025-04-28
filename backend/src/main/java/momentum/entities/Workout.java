package momentum.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String category;
    private String level;
    private String title;

    @ManyToOne
    @JoinColumn(name = "trainer_id", nullable = false)
    private AppUser trainer;

    @ManyToOne
    @JoinColumn(name = "exercise_id", nullable = false)
    private Exercise exercise;

    private Integer duration;
    private Timestamp date;
}
