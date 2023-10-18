package com.chert.satan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@SpringBootApplication
@RestController
@RequestMapping("api/v1/dogs")
@CrossOrigin(origins = "*")
public class SatanApplication {

    private final DogRepository dogRepository;

    public SatanApplication(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(SatanApplication.class, args);
    }

    @GetMapping
    public List<Dog> getDogs() {
        return dogRepository.findAll();
    }

    record NewDogRequest(
            String name,
            String breed,
            Integer age,
            String image_path
    ) {

    }

    @PostMapping
    public void addDog(@RequestBody NewDogRequest request) {
        Dog dog = new Dog();
        dog.setName(request.name());
        dog.setBreed(request.breed());
        dog.setAge(request.age());
        dog.setImagePath(request.image_path());
        dogRepository.save(dog);
    }

    @DeleteMapping("{dogId}")
    public void deleteDog(@PathVariable("dogId") Integer id) {
        dogRepository.deleteById(id);
    }

    @PutMapping("{dogId}")
    public void updateDog(@PathVariable("dogId") Integer id,
                          @RequestBody Dog dog) {
        dog.setId(id);
        dogRepository.save(dog);
    }
}