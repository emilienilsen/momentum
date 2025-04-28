package momentum.service;

import momentum.communication.AppUserRepository;
import momentum.entities.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DatabaseService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Transactional
    public Iterable<AppUser> update_name(String new_name) {
            appUserRepository.findAll().forEach(appUser -> {
                appUser.setName(new_name);
            });

            return appUserRepository.findAll();
    }
}
